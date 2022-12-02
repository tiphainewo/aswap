<template>
  <div class="flex flex-col items-center justify-start mt-5 mx-5 gap-3 h-full">
      <div class="flex flex-col items-center flex-none">
          <v-avatar size="90" >
              <v-img src="@/assets/userPP.png"></v-img>
          </v-avatar>
          <p class="!m-0 font-semibold">Lucas Chalamet</p>
          <v-rating color="secondary" length="5" :value="4.5" dense half-increments small></v-rating>
      </div>
        <v-btn depressed small color="secondary">Ajouter un jeu</v-btn>
      
      <div class="flex flex-col items-stretch w-screen">
          <p class="font-bold text-xl text-primary">Jeux</p>
          <div class="grid grid-cols-2 gap-2">
              <div v-for="game of games" v-bind:key="game.id"  v-on:click="openGame(game)">
                  <GameCard :game="game">
                  </GameCard>
              </div>
              
          </div>
      </div>
      <v-overlay :value="overlay" v-on:click="closeGame()" :opacity="0.2">
          <div class="w-screen rounded-t-3xl bg-white h-[70%] fixed bottom-0 left-0 p-5 text-black">
              <GameCardExpanded :game="selectedGame"></GameCardExpanded>
          </div>
      </v-overlay>    
    </div>
  
</template>

<script lang="ts">
import GameCard from '../GameCard.vue';
import GameCardExpanded from '../GameCardExpanded.vue';



export default { 
  components: { GameCard, GameCardExpanded },

  props: ["games"],

  methods: {
      openGame(game) {
          this.overlay = !this.overlay;
          this.selectedGame = game;
      },
      closeGame(){
          this.overlay = false;
          this.selectedGame={};
      }
  },

  data() {
      return {
          overlay: false,
          selectedGame: {},
      };
  },

  




  

}

</script>

