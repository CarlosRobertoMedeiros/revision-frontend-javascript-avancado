class HttpService{

    get(url){
        return new Promise((resolve, reject) =>{
            
            let request = new XMLHttpRequest();
            request.open('GET', url);
    
            request.onreadystatechange = () =>{
                
                if (request.readyState == 4) {
                    if (request.status==200)
                      resolve(JSON.parse(request.responseText));
                    else
                      reject(request.responseText);
                }
            };
            request.send();
        });
    }

}

