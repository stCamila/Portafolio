var btn = document.getElementById('btn1');
btn.addEventListener('click', function(){
var num = document.getElementById('num').value;
var sumaPar=0;
var SumaImpar=0;
var SumaMul=0;
for (var i=50; i<=num; i++){
if(i % 2==0){
sumaPar=sumaPar + i;
}
else{
    SumaImpar += i;
}
if (i % 5 == 0){
SumaMul = SumaMul + i;
}
}
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
div1.innerHTML = "Suma de pares: "+sumaPar;
div2.innerHTML = "Suma de impares: "+SumaImpar;
div3.innerHTML = "Suma de múltiplos de 5: "+SumaMul;
div1.style.color='black';
div2.style.color='black';
div3.style.color='black';
/*var numeros = [sumaPar,SumaImpar,SumaMul]//se ordenan de forma ascente
console.log(numeros);
var ordenados = numeros.sort();

console.log(ordenados);
console.log(ordenados[0]);
console.log(numeros[ordenados.indexOf(numeros[ordenados.indexOf(105)])]);*/
    
var mayor; var medio; var menor; //como identificar el menor o mayor numero de 3 numeros
if(sumaPar > SumaImpar){
mayor = sumaPar;
div1.style.color = '#00913f'
if(mayor < SumaMul){
mayor = SumaMul;
div1.style.color = '#00913f'
}
else{
    div2.style.color = '#00913f'
}
}
else{
    mayor=SumaImpar;
    div2.style.color='green';
}
});