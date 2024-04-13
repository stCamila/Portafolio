var div = document.querySelector('#res');
/*for (var i=1; i<=100; i++){
    //console.log(i); imprime en consola en la página
    div.innerHTML += i + '<br>';  //div.innerHTML = div.innerHTML + i; la línea del código son iguales 
}*/
var fin = document.querySelector('#fin');
fin.addEventListener('keypress',function(event){ //
    console.log(event);
    if(event.charCode == 13){
    div.innerHTML=''; //es para limpiar el div
for(var i=1; i<=fin.value; i++){
    div.innerHTML+= i+ ' ';
}
}
});