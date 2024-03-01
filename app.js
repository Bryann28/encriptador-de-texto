function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}


let btnEncriptar = document.querySelector("#encriptar");

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#mensaje").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#resultado");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})


const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}


let btnCopiar = document.querySelector("#copiar");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#mensaje").value="";

});

let btnDesencriptar = document.querySelector("#desencriptar");

btnDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#mensaje").value;
    let Desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#resultado");
    resultado.value = Desencriptado;
})



function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}