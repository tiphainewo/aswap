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
            <p>Jeux</p>
            <div class="grid grid-cols-2 gap-2">
                <div v-for="game of games" v-bind:key="game.id"  v-on:click="overlay = !overlay">
                    <GameCard :game="game">
                    </GameCard>
                </div>
                
            </div>
        </div>
        <v-overlay :value="overlay" v-on:click="overlay = false"></v-overlay>
    </v-main>
</template>

<script lang="ts">
import GameCard from '../GameCard.vue';


export default { 
    components: { GameCard },

    props: ["users", "games"],

    data() {
        return {
            usersArray: this.users,
            id: this.$route.params.id,
            overlay: false,

        };
    },
    computed: {
        user() {
            return this.usersArray.find(user => user.id == this.id);
        }
    },
    
    methods: {

    }

 

    
  
}

</script>

  