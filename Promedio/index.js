var boton = document.getElementById('btn1');
boton.addEventListener('click', promediar);
function promediar(){
    var cal1 = parseInt(document.getElementById(calificación1).value);
    var cal2 = parseInt(document.getElementById(calificación2).value);
    var cal3 = parseInt(document.getElementById(calificación3).value);
    var ordinario = parseInt(document.getElementById(calificación4).value);
    var promedio1 = (cal1+cal2+cal3/3);
    var promedio2 =(((cal1+cal2+cal3/3)+ ordinario)/2) ;

  document.getElementById('resultado').innerHTML = resultado;
if(promedio > 6){
    document.getElementById('resultado').
}
}