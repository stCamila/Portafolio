// Objetos: son atributos y métodos en JS se pueden crear objetos sin necesidad de tener un clase 
//const es un tipo de variable que no cambia es constante. 
const objeti = {}; //Objeto vacío 
const persona = {//
nombre: 'Jesús', 
apellidos: 'Pérez', 
edad: 15, 
saludar: function(){//métodos 
    return 'Holi, soy'+ this.nombre//thtis manda a llamar al objeto que se desea
}
}
//Se manda a llamar al método
console.log(persona.saludar());

//Array de onjetos 
const persona2 = {//
    nombre: 'Pepe', 
    apellidos: 'Pica', 
    edad: 25, 
   //métodos
  saludar: function(){
        return 'Holi, soy'+ this.nombre //thtis manda a llamar al objeto que se desea
     }
    }
   let personas =[persona,persona2];

   console.log(personas[0].saludar()); //[0].saludar() se coloca para seleccionar que objeo qae 

    let tabla='';
    persona.nombre='Pablo';//Se modifica el atributo de la tabla
   for(let i=0; i<personas.length; i++){
    tabla += '<tr><td>'+(i+1)+'</td><td>'+personas[i].nombre+'</td><td>'+personas[i].apellidos+'</td><td>'+personas[i].edad+'</td><tr>';
   }
   document.getElementById('tabla').innerHTML = tabla;