<template>
    <div class="flex flex-col items-center pt-5 px-5 gap-2 h-full bg-[#EDEEB6]">
        <Filters/>
        <GameCard v-for="game in info" v-bind:key="game.id" :game="game" :user="users[0]"/>
    </div>


</template>

<script>
import axios from 'axios'
import GameCard from '../GameCard.vue'
import Filters from '../Filter.vue'

export default ({
    props: ['users'],
    components: {GameCard, Filters},
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('https://api.boardgameatlas.com/api/search?limit=100&client_id=z6FWVq6sRg')
            .then(response => (this.info = response.data.games))
            .catch(error => console.log(error))
    }
})
</script>
