var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
var num = document.getElementById('num');
var mul = document.getElementById('multiplo');
var resultado='';
for(var i=num; i>0; i--){
    if(i % mul ==0){
        resul += '<br>'+i+ 'es multiplo de '+mul+'<br>';
    }
    else{
        resultado=+i+'no es multiplo de'+mul+'<br>';
    }
}
document.getElementById('div1').innerHTML=resultado;
});