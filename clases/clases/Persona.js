 export class Persona{
    //Atributos y métodos
    nombre='';
    apellidos='';
    peso=0;
    altura=0;
    constructor(nom,ape,pe,al){
        //THIS. hace referencia a la misma clase que se creo
        this.nombre = nom;
        this.apellidos= ape;
        this.peso = pe;
        this.altura = al;
    }
    saludar(){
        return 'Hola, soy '+this.nombre+' '+this.apellidos;
    }
    imc(){
        return (this.peso/(this.altura * this.altura));
    }
}