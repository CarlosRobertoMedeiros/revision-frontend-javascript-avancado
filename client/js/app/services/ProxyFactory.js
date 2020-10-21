class ProxyFactory{

    static create(objeto, propriedades, acao){
        
        return new Proxy(objeto,{

            //trap -> Armadilha do Proxy
            get(target, propriedade, receiver){
                if(['adiciona','esvazia'].includes(propriedade) && ProxyFactory._isFuncao(target[propriedade])){
                    //substituindo no proxy    
                    return function(){
                        console.log(`Interceptando ${propriedade}`);
                        Reflect.apply(target[propriedade],target,arguments);
                        return acao(target);
                    }

                }
                return Reflect.get(target,propriedade, receiver);
            },

            set(target, propriedade,value,receiver){
                if(propriedades.includes(propriedade)){
                    console.log(propriedade);
                    acao(target);
                }
                return Reflect.set(target,propriedade, value, receiver);
            }

        });

    }

    static _isFuncao(func){
        return typeof(func) == typeof(Function);
    }

}