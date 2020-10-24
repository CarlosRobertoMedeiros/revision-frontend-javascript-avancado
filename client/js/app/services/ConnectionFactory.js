//Aplicado o Moduling Pattern
//Exportando a Fábrica de Conexões
var ConnectionFactory = (function (){
    const stores = ['negociacoes'];
    const version = 2;
    const dbName = 'sistemateste';
    
    var connection = null;
    
    var close = null;

    return class ConnectionFactory{

        constructor(){
            throw new Error('Não é possível criar instâncias de ConnectionFactory');
        }
        
        static getConnection(){

            return new Promise((resolve,reject) =>{

                let openRequest = window.indexedDB.open(dbName,version);

                
                openRequest.onupgradeneeded = e =>{
                    
                    ConnectionFactory._createStores(e.target.result);

                };

                openRequest.onsuccess = e =>{

                    if (!connection){ 
                        connection = e.target.result;
                        //close = connection.close.bind(connection);//Técnica um para associar o this de connection ao close
                        close = connection.close;
                        connection.close = function(){
                            throw new Error('Você não pode fechar diretamente a conexão')//Técnica MonkeyPatch
                        }
                    }

                    resolve(connection);


                };

                openRequest.onerror = e =>{
                    
                    console.log(e.target.console.error);
                    
                    reject(e.target.error.name);
                };

            });

        }

        static _createStores(connection){
            
            stores.forEach(store =>{

                if (connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);
                
                connection.createObjectStore(store,{autoIncrement:true});
            });
        
        }

        static closeConnection(){

            if (connection){
                //close(); Técnica 1
                Reflect.apply(close,connection, []);//Técnica 2 associando o bind 
                connection = null;
            }
        }
    }
})();