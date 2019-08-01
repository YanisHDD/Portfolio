<!-- C'est ici qu'on appelle le composant my-vuetable -->
<!-- En lui passant directement une URL construite proprement à partit du choix d'un Pokemon -->


<template>
    <div>
        <slot name="detail"> </slot>
        <br />
        <br />
        Saisir l'iidentifiant du Pokémon: <input type="number" min="1" max="802" v-model="nombre">                
        <button @click="chercheNom">Je te choisis !</button>                 
        <img v-bind:src="imgPokemon">
        <span> Nom : {{nomPokemon}} </span> 
    
        <div class="ui container" v-if="matable==1">
            <my-vuetable  :url="this.apiUrl"></my-vuetable>
            <my-abilities  :url="this.apiUrl"></my-abilities>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import MyVuetable from './MyVuetable'
import MyAbilities from './MyAbilities'


export default {
    components: {
    MyVuetable,
    MyAbilities
  },
  data () {
    return {
	  imgPokemon: null,
    nomPokemon: null,
    nombre: null,
    matable: null,
    apiUrl: null,

    vitesse: null,
    defense: null,
    attaque: null,
    hp: null,

    afficher:null

    }
  },
  methods: {
	chercheNom() {
            let apiUrl = "https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/" + this.nombre;
            
            axios.get(apiUrl)
                .then(response => {                    
                    this.nomPokemon = response.data.forms[0].name;
                    this.imgPokemon = response.data.sprites.front_shiny;

                    this.vitesse  = parseInt(response.data.stats[0].base_stat);
                    this.defense  = parseInt(response.data.stats[3].base_stat);
                    this.attaque  = parseInt(response.data.stats[4].base_stat);
                    this.hp       = parseInt(response.data.stats[5].base_stat)*3; 
                });
            
            let matable=1;
            this.apiUrl = apiUrl ;
            this.matable=matable ;
            
        }
  }
}
</script>