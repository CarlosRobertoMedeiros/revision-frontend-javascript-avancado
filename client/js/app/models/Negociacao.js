class Negociacao{

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getVolume(){
        return this._quantidade * this._valor;
    }

    getData(){
        return this._data;
    }

    getQuantidade(){
        return this.quantidade;
    }

    getValor(){
        return this._valor;
    }

}

//Continuar a partir do vídeo 02 / 5