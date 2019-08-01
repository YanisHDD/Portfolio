<!-- Création du template dans le fichier App.vue -->
<!-- Appel des autres composants. -->



<template>
  <div id="app">
    <div id="pkmns">
      <div class="ui container">

        <h1>Pokemon J1</h1>
        <mon-poke ref="premierPoke">
          <template slot="detail"> 
            Les caractéristiques du 1er Pokemon vont s'afficher
          </template>
        </mon-poke> 

      </div>
      <div class="ui container">
        
        <h1>Pokemon J2</h1>
        <mon-poke ref="secondPoke">
          <template slot="detail"> 
            Les caractéristiques du 2ème Pokemon vont s'afficher
          </template>
        </mon-poke>  

      </div>
    </div>

    <div id="combat">
      <button class="bouttonCombat" @click="getPokes()">Combattez !</button>
      <div id=affichage>  
        <p v-html="afficher"></p>
      </div>
    </div>
  </div>
</template>

<script>
import MonPoke from './components/MonPoke'


export default {
  name: 'app',
  components: {
    MonPoke
  },
  data () {
    return {

    afficher:null

    }
  },
  computed:
  {
    affichage(){
      return this.afficher
    }
    
  },
  methods: {
  // Used to focus the input from the parent
  getPokes: function () {


    var etape = "";
    var hpPerduJ1 = (this.$refs.secondPoke.attaque*1.5) - (this.$refs.premierPoke.defense) ;
    var hpPerduJ2 = (this.$refs.premierPoke.attaque*1.5) - (this.$refs.secondPoke.defense);

    while ( ( this.$refs.premierPoke.hp && this.$refs.secondPoke.hp ) > 0 ) {

        if ( this.$refs.premierPoke.vitesse > this.$refs.secondPoke.vitesse) {                         //Le + rapide attaque en premier (ici J1)

            
            this.$refs.secondPoke.hp -= hpPerduJ2;
            etape += (this.$refs.premierPoke.nomPokemon + " attaque <br>"); 
            etape += (this.$refs.secondPoke.nomPokemon + " a perdu " + hpPerduJ2 + "Hp <br>");                       //Les dégats subis
            if (this.$refs.secondPoke.hp < 0) {                                                                           //Si le pokemon est KO
                etape += ("Il reste 0 Hp à " + this.$refs.secondPoke.nomPokemon +" ,Il est KO !  <br><br>");                 //Le pokemon est mort
                etape += ( this.$refs.premierPoke.nomPokemon + " A GAGNE LE COMBAT !!");                             //Le gagnant
                break;
            }
            etape += ("Il lui reste " + this.$refs.secondPoke.hp  + "Hp <br> <br>");                      //La vie restante ainsi que les degats pris par le pokemon



            this.$refs.premierPoke.hp -=  hpPerduJ1; 
            etape += (this.$refs.secondPoke.nomPokemon + " attaque <br>"); 
            etape += (this.$refs.premierPoke.nomPokemon + " a perdu " + hpPerduJ1 + "Hp <br>");
            if (this.$refs.premierPoke.hp < 0) {                
                etape += ("Il reste 0 Hp à " + this.$refs.premierPoke.nomPokemon +" ,Il est KO !  <br><br>");
                etape += ( this.$refs.secondPoke.nomPokemon + " A GAGNE LE COMBAT !!");
                break; 
            }
            etape += ("Il lui reste " + this.$refs.premierPoke.hp  + "Hp <br> <br>");     
        }



        else {                                          // Si J2 est plus rapide alors il commence à attaquer

            this.$refs.premierPoke.hp -=  hpPerduJ1; 
            etape += (this.$refs.secondPoke.nomPokemon + " attaque <br>"); 
            etape += (this.$refs.premierPoke.nomPokemon + " a perdu " + hpPerduJ1 + "Hp <br>");
            if (this.$refs.premierPoke.hp < 0) {                
                etape += ("Il reste 0 Hp à " + this.$refs.premierPoke.nomPokemon +" ,Il est KO !  <br> <br>");
                etape += ( this.$refs.secondPoke.nomPokemon + " A GAGNE LE COMBAT !!");
                break; 
            }
            etape += ("Il lui reste " + this.$refs.premierPoke.hp  + "Hp <br> <br>");


            this.$refs.secondPoke.hp -= hpPerduJ2;
            etape += (this.$refs.premierPoke.nomPokemon + " attaque <br>"); 
            etape += (this.$refs.secondPoke.nomPokemon + " a perdu " + hpPerduJ2 + "Hp <br>");
            if (this.$refs.secondPoke.hp < 0) {
                etape += ("Il reste 0 Hp à " + this.$refs.secondPoke.nomPokemon +" ,Il est KO !  <br> <br>");
                etape += ( this.$refs.premierPoke.nomPokemon + " A GAGNE LE COMBAT !!");
                break;
            }
            etape += ("Il lui reste " + this.$refs.secondPoke.hp  + "Hp <br> <br>");

        }
      }
      this.afficher = etape;      
    }
  }
}
</script>
 

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #FCE3E3;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#pkmns{
  display: flex;
}
#pkmns .ui{
  width: 100%;
}

button{
  background-color: #EB7979;
  color: black;
  border : none;
  border-radius:12px 0 12px 0;
}

button:hover{
  background-color: #555555;
  color: white;
  transition-duration: 0.5s;
  cursor: pointer;
}

#combat{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

#combat .bouttonCombat{ 
  margin-left: 45%;
  width: 10%;
  height: 50px;
  background-color: #EB7979;
  color: black;
  border: 2px solid #555555;
}

#combat .bouttonCombat:hover{
  background-color: #555555;
  color: white;
  transition-duration: 0.5s;
  cursor: pointer;
}

#affichage{
  margin-top: 30px;
}
</style>