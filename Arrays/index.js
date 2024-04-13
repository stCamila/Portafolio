var edades=[18,15,20,5,13,22,41,26];
var nombres=['Dan','Ernesto','Pedro'];
var variado=[25,'lechuga',7.5,'Santiago'];
//Mostrar posisición de array
//console.log(edades[2]);

//Para saber pa posisicon del array, se puede saber si un elemento existe en un arrys
//console.log(variado.indexOf('nada'));

nombres.push('Nuevo');//Añadir elementos a un array
/*nombres.shift();//Elimina el primer elemento del array
nombres.log(nombres);
nombres.pop();//Elimina el último elemento del arra
nombres.log(nombres); */
var op='';
var filas=''
for (var j=0; j<nombres.length; j++){
    //console.log(nombres[j])
    op+= '<option value="'+j+'">'+nombres[j]+'</option>'
    filas +='<tr><td>'+ (j+1)+'</td><td>'+nombres [j]+'</td></tr>';
}
document.querySelector('#op').innerHTML= op;
document.querySelector('#tabla').innerHTML= filas;
//console.log(edades)
/*
//Suma de arrays
let array1=[10,5,6,8,2]
let array2=[3,7,20,16,1]
let array3=[];
for(let i=0;i<array1.length;i++){
    array3.push(array1[i]+array2[i])
}
console.log(array3)*/