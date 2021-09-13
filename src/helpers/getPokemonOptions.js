import pokemonApi from "../api/pokemonAPI";

const getPokemon = () =>{

    const pokemonArr = Array.from(Array(650)); 

    return pokemonArr.map((_, index) => index + 1);
}



const getPokemonOptions = async () => {

    const mixedPokemon = getPokemon().sort(() => Math.random() - 0.5);

    console.log(mixedPokemon);

   const pokemons = await getPokemonNames(mixedPokemon.splice(0,4));

   return pokemons;
}

const getPokemonNames = async ([a,b,c,d] = []) => {

    //const resp =  await pokemonApi.get(`/${1}`);

    //console.log(resp);

    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ];


  const [respa,respb,respc,respd] = await  Promise.all(promiseArr).then()

  return [
      {name: respa.data.name, id:respa.data.id},
      {name: respb.data.name, id:respb.data.id},
      {name: respc.data.name, id:respc.data.id},
      {name: respd.data.name, id:respd.data.id}
  ]
}

export default getPokemonOptions 