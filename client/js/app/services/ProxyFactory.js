class ProxyFactory{

    static create(objeto, propriedades, acao){
        
        return new Proxy(new ListaNegociacoes(),{

            //trap -> Armadilha do Proxy
            get(target, propriedade, receiver){
                if(['adiciona','esvazia'].includes(propriedade) && typeof(target[propriedade]) == typeof(Function)){
                    //substituindo no proxy    
                    return function(){
                        console.log(`Interceptando ${propriedade}`);
                        Reflect.apply(target[propriedade],target,arguments);
                        return acao(target);
                    }

                }
                return Reflect.get(target,propriedade, receiver);
            }

        });
    }

}