class MensagemView extends View{

    constructor(elemento){
        super(elemento);
    }
    
    template(model){
        return  model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>'; //String é um texto em branco para esse ternário
    }

}