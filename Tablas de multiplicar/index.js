/*var btn= document.querySelector('#btnMostrar');
btn.addEventListener('click', function(){
var tabla = document.querySelector('#tabla').value;
var inicio = document.getElementById('inicio').value;
var fin = document.getElementById('fin').value;
calcularTabla(tabla, inicio, fin);
});

function calcularTabla(t, inicio, fin){
    var div = document.getElementById('res');
    var resultado = '';
    for(var i=inicio; i<=fin; i++){
        resultado += t+' x '+i+' = '+(t*i)+'<br>';
    }
    div.innerHTML = resultado;
}*/
var btn= document.querySelector('#btnMostrar');
btn.addEventListener('click', function(){
    var numero = document.getElementById('numero').value;
    var suma = document.getElementById('suma').value
    calcularTabla(numero, suma);
});

function calcularTabla(numero, suma){
    var div = document.getElementById('res');
    var resultado = 0;
    for(var i=1; i<=suma; i=i+2){
       div.innerHTML+= +i+ 
    }
}

 