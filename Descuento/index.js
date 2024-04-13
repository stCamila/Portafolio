var boton = document.getElementById('btnCalcular');
boton.addEventListener('click',calcular);
function calcular(){
    var precio = parseInt(document.getElementById('precio').value);
    var descuento = parseInt(document.getElementById('descuento').value);
    var final = precio -(precio * (descuento/100));
    document.getElementById('precio-final').innerText = final;

}



