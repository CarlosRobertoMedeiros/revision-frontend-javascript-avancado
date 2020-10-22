class NegociacaoService{

    obterNegociacoesDaSemana(cb){
       
       let request = new XMLHttpRequest();
       request.open('GET', 'http://localhost:8080/v1/negociacoes/semana');
       request.setRequestHeader('Access-Control-Allow-Origin', '*');

       request.onreadystatechange = () =>{
            
            if (request.readyState == 4 && request.status==200) {
                cb(null,JSON.parse(request.responseText)
                .map( objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor)));
                
            }else{
                console.log(request.responseText);
                cb('Não foi possível obter as negociações');
            }

       };

       request.send();
    }


}