class NegociacaoService{

    constructor(){
        this._serviceHttp = new HttpService();
    }
    
    obterNegociacoesDaSemana(){
       
       return new Promise((resolve, reject) =>{
            
            this._serviceHttp
                .get('http://localhost:8080/v1/negociacoes/semana')
                .then(negociacoes =>{
                    resolve(negociacoes.map( objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                })
       });
       
    }


    obterNegociacoesDaSemanaAnterior(){
       
        return new Promise((resolve, reject) =>{
            
            this._serviceHttp
                .get('http://localhost:8080/v1/negociacoes/anterior')
                .then(negociacoes =>{
                    resolve(negociacoes.map( objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior');
                })
       });
    }

    obterNegociacoesDaSemanaRetrasada(){
       
        return new Promise((resolve, reject) =>{
            
            this._serviceHttp
                .get('http://localhost:8080/v1/negociacoes/retrasada')
                .then(negociacoes =>{
                    resolve(negociacoes.map( objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada');
                })
       });

    }   
}