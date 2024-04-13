var div = document.querySelector('#res');
var fin = document.querySelector('#numero');
fin.addEventListener('keypress',function(event){ 
    console.log(event);
    var fac = 1;
    if(event.charCode == 13){
    
for(var i=1; i<=numero.value; i++){
   //fac = fac * i;
   fac *= i; // es lo mismo de una forma simplificada 
   
}
div.innerHTML = fac; //imprime en pantalla
}
});

for(var i=1; i<=5; i=i+2){
    div.innerHTML+= "<h"+i+">Hola</h"+i+">";

    
 }
