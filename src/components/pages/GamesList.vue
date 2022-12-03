<template>
    <div class="flex flex-col items-start pt-5 px-5 gap-2 h-full bg-[#EDEEB6] pb-20">
        <p class="font-bold text-xl text-[#D94693]"><v-icon color="secondary"
                class="pr-2">mdi-cards-playing</v-icon>Liste des jeux</p>
        <Filters />
        <div class="flex flex-col justify-start gap-2 h-full " v-if="(matchedGames && matchedGames.length > 0)">

            <GameCard :game="game" :user="getRandomUser()" @select-user="setSelectedGameToView" v-for="(game, index) in matchedGames" :key="index" />

        </div>

        <div v-else class="h-full w-full flex items-center justify-center"><v-progress-circular :size="50" indeterminate
                color="secondary"></v-progress-circular></div>


        <v-overlay :value="showGameView" :opacity="0.2" v-on:click.stop="(showGameView = false)"></v-overlay>

        <div v-if="showGameView"
            class="z-10 w-screen rounded-t-3xl bg-white h-[80%] fixed bottom-0 left-0 p-5 text-black">
            <GameCardExpanded :game="selectedGame" :user="selectedUser"></GameCardExpanded>
        </div>

    </div>


</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import GameCard from '../GameCard.vue'
import GameCardExpanded from '../GameCardExpanded.vue'
import Filters from '../Filter.vue'

export default ({
    props: ['users'],

    data() {
        return {
            info: null,
            showGameView: false,
            selectedUser: {}
        }
    },

    mounted() {
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
        setSelectedGameToView(payload) {
            this.setSelectedGame(payload.game)
            this.selectedUser=payload.user;
            this.showGameView = true
        },
        getRandomUser() {
            return this.users[Math.floor(Math.random() * this.users.length)];
        }
    },
    components: {
        Filters,
        GameCard,
        GameCardExpanded
    }
})
</script>
