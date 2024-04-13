var nombres=['Dan','Ernesto','Pedro'];
console.log(nombres);
console.push['juan','María'];
console.log(nombres);
console.pop();//Elimina el ultimo elemnto
console.log(colores);
//Aplicación de HTML
var opciones = '';
var tabla = '';
for(var i=0; i<nombres.length ; i++){
opciones += 'option value="'+i+'">'+nombres[i]+'</option/>'
tabla += '<tr><td>'+(i+1)+'</td><td>'+nombres[i]+'</td></tr>'
}
document.querySelector('#S1').innerHTML = opciones;
document.querySelector('#B1').innerHTML = tabla;

var apellidos = [];
var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    var nombres = document.querySelector('#nuevo').value;
    apellidos.push(apellido);
});

function llenaTabla(){
    var body='';
    for(var i=0; i<apellidos.length; i++){
        body+= '<tr><td>'+(i+1)+'</td><td>'+apellidos[i]+'</td></tr>';
    }
    document.querySelector('#B2').innerHTML = body;
}

var btn2= document.getElementById('btn2')
btn2.addEventListener('click', () =>{
    apellidos.shift()
    llenaTabla()
})

var btn3= document.getElementById('btn2')
btn3.addEventListener('click', () =>{
    apellidos.pop()
    llenaTabla()
})