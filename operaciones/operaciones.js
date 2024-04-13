var boton = document.getElementById('btn1'); //se agrega el evento al que a hacer la acción que dé el resultado final 

boton.addEventListener('click',operacion); 

function operacion(){ //despues de la coma hay una funcionalidad, se realiza la acción que se quiere
    var num1 = parseInt(document.getElementById('n1').value);
    var num2 = parseInt (document.getElementById('n2').value);
    var opcion = document.getElementById('operaciones').value;
    var resultado; //Se tiene que convertir a entero las variables de los numeros con parseInt, se coloca lo demás en parentesis 
    if(opcion == 1){
        resultado = num1 + num2;
    } 
    else if (opcion == 2){
        resultado = num1 - num2;
    }
    else if (opcion == 3){
        resultado = num1 * num2;
    }
    else{
        resultado = num1 / num2;
    }
    document.getElementById('resultado').innerHTML = resultado;
}

/*function(){ //despues de la coma hay una funcionalidad, se realiza la acción que se quiere
 var num1 = parseInt(document.getElementById('n1').value);
 var num2 = parseInt (document.getElementById('n2').value);
 var resultado = num1 + num2; //Se tiene que convertir a entero las variables de los numeros con parseInt, se coloca lo demás en parentesis 
 document.getElementById('resultado').innerHTML = resultado; //Se imprime el resultado 
}*/