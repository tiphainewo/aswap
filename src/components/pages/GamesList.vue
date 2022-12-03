<template>
    <div class="flex flex-col items-center pt-5 px-5 gap-2 h-full bg-[#EDEEB6]">
        <Filters />
        <div class="flex flex-col gap-2 ">
            <div @click="setSelectedGameToView(game)" v-for="(game, index) in allGames" :key="index">
                <GameCard :game="game"  :user="users[0]"/>
            </div>
        </div>
    </div>


</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import GameCard from '../GameCard.vue'
import Filters from '../Filter.vue'

export default ({
    props: ['users'],

    data() {
        return {
            info: null,
            showGameView: false,
        }
    },

    mounted () {
        this.$store.dispatch('loadItems')
    },

    computed: {
        ...mapState(['selectedGame']),
        ...mapGetters([
            'matchedGames', 'allGames'
        ])
    },
    methods: {
        ...mapMutations(['setSelectedGame']),
        setSelectedGameToView(game) {
            this.setSelectedGame(game)
            this.showGameView = true
        }
    },
    components: {
        Filters,
        GameCard,
    }
})
</script>
