<template>
    <v-main class="flex flex-col items-center mt-5 mx-5 gap-10" v-if="user">
        <div class="flex flex-col items-center">
            <v-avatar size="80" bordered color="white" class="border-2" v-if="user.userImage">
                <v-img :src="user.userImage"></v-img>
            </v-avatar>

            <v-avatar color="secondary" v-else>
                <v-icon dark>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            <p>{{ user.firstName + ' ' + user.lastName }}</p>
            <v-rating length="5" :value="4.5" dense half-increments></v-rating>
        </div>

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

  