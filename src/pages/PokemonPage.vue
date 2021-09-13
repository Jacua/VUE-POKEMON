<template>
 <h2 v-if="!pokemon">Por favor espere...</h2>
  <div v-else>
    <h1>Quien es este Pokemon</h1>
    <pokemon-picture :PokemonId="pokemon.id" :showPokemon="showPokemon"></pokemon-picture>
    <pokemon-options
    :pokemons="pokemonsArr"
    @selection="checkAnswer">
    </pokemon-options>

    <h1>{{message}}</h1>

    <button @click="newGame">Nuevo Juego</button>
  </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  components: { PokemonOptions,PokemonPicture },
  data(){
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer:false,
      message: ""
    }
  },
  methods:{
    async mixPokemonsArray(){
      this.pokemonsArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonsArr[rndInt]

      console.log(this.pokemonsArr);
    },
    checkAnswer(pokemonId){

      this.showAnswer = true;
      this.showPokemon = true;

      if (pokemonId == this.pokemon.id) {
        this.message = ""
        this.message = `Correcto!, ${this.pokemon.name}`
      }
      else{
        this.message = `oops, era ${this.pokemon.name}`
      }
    },
    newGame(){
      this.showPokemon = false;
      this.message = '';
      this.showAnswer = false;
      this.pokemonsArr = []
      this.pokemon = null;
      this.mixPokemonsArray();

    }
  },
  mounted(){
    //se ejecuta cuando se monta el componente
    this.mixPokemonsArray()
  }
}
</script>
