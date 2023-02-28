
let inicio = 0;


function pedir() {
    
    let enteroAleatorio = inicio + Math.floor((Math.random()*9000)+1000) ;

    document.getElementById ('quini').innerHTML = enteroAleatorio  ;
    
    return enteroAleatorio;

}



  