var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click',()=>{
    var cuantos = parseInt(document.querySelector('#cuantos').value);
    var inputs='';//variable de texto 
for(i=1; i<=cuantos; i++){
inputs +='<div class="col-md-3">';
inputs +='<input type="number" id="n'+i+'" class="form-control" placeholder="Número '+i+'">';
inputs +='</div>';
}
document.getElementById('panel').innerHTML=inputs;
});

var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    var cuantos = parseInt(document.querySelector('#cuantos').value);
    var op = document.getElementById('operacion').value;
    var res = 0
    if (op == 1){
        res= sumar(cuantos);
    }
    else if(op == 2){
        res = sumar(cuantos)/cuantos;
    }
    else if(op == 3){
        res = multiplicar(cuantos)
    }
    alert("Resultado: "+res);
});

function sumar(cuantos){
    var suma=0;
    for(var i=1; i<=cuantos; i++){
        suma += parseInt(document.getElementById('n'+i).value);
    }
    return suma;
}
function multiplicar(cuantos){
    var multiplicacion=1;
    for(var i=1; i<=cuantos; i++){
        multiplicacion *= parseInt(document.getElementById('n'+i).value);
    }
    return multiplicacion;
}