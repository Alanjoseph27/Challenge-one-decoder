function encriptar(){
    
    /* FORMA 1 */ 
    let mensaje = document.getElementById("texto").value;

    let flag = false;

    if(mensaje == ""){
        flag = true;
    }else{
      //  flag = false;
        let miFrase = mensaje.split("");

    for(let i = 0; i<miFrase.length; i++){
        if(miFrase[i] == "e"){
            miFrase[i] = "enter";
        }

        if(miFrase[i] == "i"){
            miFrase[i] = "imes";
        }

        if(miFrase[i] == "a"){
            miFrase[i] = "ai";
        }

        if(miFrase[i] == "o"){
            miFrase[i] = "ober";
        }

        if(miFrase[i] == "u"){
            miFrase[i] = "ufat";
        }
    }

    let frase = miFrase.toString();

    let nuevaFrase = frase.replace(/,/g, "");

    document.getElementById("mensajeTrad").textContent = nuevaFrase;

    document.getElementById("mensajeTrad").style.top = "50px";
    document.getElementById("mensajeTrad").style.height = "600px";
    let muneco = document.getElementById("muneco");
    muneco.style.visibility = "hidden";

    let ingresaText = document.getElementById("ingresaTexto");
    ingresaText.style.visibility = "hidden";

    document.getElementById("boton3").style.visibility = "visible";
    document.getElementById("nave").style.visibility = "visible";
    }

    

    /* FORMA 2*/
    /*
    let mensaje = document.getElementById("texto").value;
    let nuevaFrase = mensaje.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    document.getElementById("mensajeTrad").textContent = nuevaFrase;

    document.getElementById("mensajeTrad").style.top = "50px";

    let muneco = document.getElementById("muneco");
    muneco.parentNode.removeChild(muneco);

    let ingresaText = document.getElementById("ingresaTexto");
    ingresaText.parentNode.removeChild(ingresaText);
    document.getElementById("boton3").style.visibility = "visible";
    */
}

function desencriptar(){
    let mensaje = document.getElementById("texto").value;

    let flag = false;
    

    if(mensaje == ""){
        flag = true;
    }else{
    let nuevaFrase = mensaje.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById("mensajeTrad").textContent = nuevaFrase;

    document.getElementById("mensajeTrad").style.top = "50px";
        
    let muneco = document.getElementById("muneco");  
    muneco.style.visibility = "hidden";
    
        
        

    let ingresaText = document.getElementById("ingresaTexto");
    ingresaText.style.visibility = "hidden";
    

    document.getElementById("boton3").style.visibility = "visible";
    document.getElementById("nave").style.visibility = "visible";
    }
    
    
}

function copiar(){
    let textoFinal = document.getElementById("mensajeTrad");
    textoFinal.select();
    document.execCommand('copy');
    alert("texto copiado");
}

