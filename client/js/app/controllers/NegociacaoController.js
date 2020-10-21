class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document); //tentando imitar o jQuery assim o query selector vai fazer associação com o document
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona','esvazia');
        
        
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event){
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação Adicionada com Sucesso !';
        this._limpaFormulario();
    }

    importaNegociacoes(){
       
       fetch('http://localhost:8080/v1/negociacoes/semana' , { mode: 'no-cors' })
       .then(response => {
         // valida se a requisição falhou
         if (!response.ok) {
           return new Error('falhou a requisição') // cairá no catch da promise
         }
   
         // verificando pelo status
         if (response.status === 404) {
           return new Error('não encontrou qualquer resultado')
         }
   
         // retorna uma promise com os dados em JSON
         return response.json()
       })


    }

    apaga(){
        this._listaNegociacoes.esvazia();        
        this._mensagem.texto ='Negociações Apagadas com Sucesso !';

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