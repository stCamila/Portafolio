const url ='https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'; 
//'https://pokeapi.co/api/v2/pokemon/';

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
            let img = await getImagen(pok.url);
            //console.log(img);
            tabla = '<tr><td>'+(i+1)+'</td><td>'+pok.name+'</td><td><img height="80" src="'+img+'"/></td></tr>';
            document.querySelector('#tabla').innerHTML += tabla;
        });
        //console.log(pokemones)
    }
}

const getImagen = async(liga) =>{
    const peticion = await fetch(liga);
    if(peticion.ok){
        const data = await peticion.json();
        return (data.sprites.other.dream_world.front_default);
    }
}