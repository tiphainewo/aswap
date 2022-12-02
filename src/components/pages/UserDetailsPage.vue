<template>
    <v-main class="flex flex-col items-center pt-5 px-5 gap-10 h-full bg-[#EDEEB6]" v-if="user">
        <v-btn
              icon
              color="secondary"
              class="absolute left-0 top-0"
              v-on:click="$router.go(-1)"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        <div class="flex flex-col items-center">
            <v-avatar size="90" v-if="user.userImage">
                <v-img :src="user.userImage"></v-img>
            </v-avatar>

            <v-avatar size="90" color="secondary" v-else>
                <v-icon dark>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            <p class="!m-0 font-semibold">{{ user.firstName + ' ' + user.lastName }}</p>
            <v-rating color="secondary" length="5" :value="4.5" dense half-increments small></v-rating>
        </div>

        <div class="flex flex-col items-stretch w-screen">
            <p class="font-bold text-xl text-primary">Jeux</p>
            <div class="grid grid-cols-1 gap-2">
                <div v-for="game of games" v-bind:key="game.id"  v-on:click="openGame(game)">
                    <GameCard :game="game" :user="user">
                    </GameCard>
                </div>
                
            </div>
        </div>
        <v-overlay :value="overlay" v-on:click="closeGame()" :opacity="0.2">
            <div class="w-screen rounded-t-3xl bg-white h-[70%] fixed bottom-0 left-0 p-5 text-black">
                <GameCardExpanded :game="selectedGame"></GameCardExpanded>
            </div>
        </v-overlay>    
    </v-main>
    
</template>

<script lang="ts">
import GameCard from '../GameCard.vue';
import GameCardExpanded from '../GameCardExpanded.vue';



export default { 
    components: { GameCard, GameCardExpanded },

    props: ["users", "games"],

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
            usersArray: this.users,
            id: this.$route.params.id,
            overlay: false,
            selectedGame: {},
        };
    },
    computed: {
        user() {
            return this.usersArray.find(user => user.id == this.id);
        }
    },
    


 

    
  
}

</script>

  