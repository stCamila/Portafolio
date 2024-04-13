import { Tarjeta } from "./Tarjeta.js";
const url ='https://pokeapi.co/api/v2/pokemon/';
//'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'; 


window.onload = async() =>{
    await getPokemones();
}
const getPokemones = async() =>{
    let tabla = '';
    //Métodos GET (por defaul), POST(guardar), PUT(actualizar), DELETE(eliminar)
    const peticion = await fetch (url)
    if (peticion.ok){
        const data = await peticion.json();
        const pokemones = data.results;
        //Indice o variable de incremento (pok, i)
        pokemones.forEach(async (pok, i) => {
            //let img = await getImagen(pok.url);
            const pokecard = new Tarjeta(3,pok.name,pok.url);
            let card= await pokecard.mostrar();
            document.querySelector('#root').innerHTML += card;
        });
    }
}