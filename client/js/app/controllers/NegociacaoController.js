class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document); //tentando imitar o jQuery assim o query selector vai fazer associação com o document
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        
        //O Arrow Function mantém sempre o this
        this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event){
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto = 'Negociação Adicionada com Sucesso !';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
    }

    apaga(){
        this._listaNegociacoes.esvazia();        

        this._mensagem.texto ='Negociações Apagadas com Sucesso !';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }
    
    
    _limpaFormulario(){
        this._inputData.value='';
        this._inputQuantidade.value=1;
        this._inputValor.value=0.0;

        this._inputData.focus();

    }




}