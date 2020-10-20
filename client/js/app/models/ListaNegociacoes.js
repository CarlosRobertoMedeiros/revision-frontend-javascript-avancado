class ListaNegociacoes{

    constructor(){
        this._negociacoes=[];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes); //Programação defensiva sempre uma cópia concatenada com as negociações
    }

    esvazia(){
        this._negociacoes= [];
    }
}