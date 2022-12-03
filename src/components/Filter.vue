<template>
    <div class="flex flex-col w-full gap-4">
        <div>
            <v-text-field hide-details solo append-icon="mdi-magnify" placeholder="Nom du jeu"
                v-model="searchByGame" @input="setSearchKey(searchByGame)"
                >
            </v-text-field>
<!-- 
            <div class="bg-white text-black p-5 rounded-b-md" v-show="(searchByGame.length > 0 && matchedGames.length >0 && showResults)">
                <p @click="setSearchGame(game)" v-for="(game, index) in matchedGames" :key="index">
                    {{ game.name }}</p>
            </div> -->
        </div>

        <div class="flex flex-col items-center w-full">
            <div class="bg-[#D94693] w-full text-white p-3 rounded-md">
                <div class="flex items-center" @click="showFilter = !showFilter">
                    <p v-if="sortBy.length > 0" class="w-full !m-0">{{ sortBy.toUpperCase() }}</p>
                    <h3 v-else>Filtres</h3>

                    <div class="flex items-center justify-end">
                        <v-icon v-if="sortBy.length > 0" @click.stop="setSortBy('')" dark>mdi-close</v-icon>

                        <v-icon v-if="showFilter" dark> mdi-chevron-up</v-icon>
                        <v-icon v-else dark>mdi-chevron-down</v-icon>
                    </div>
                </div>
                <div v-if="showFilter" class="mt-2 pt-2 border-t">
                    <p @click="showFilter = false; setSortBy('type')">Type de jeu</p>
                    <p @click="showFilter = false; setSortBy('age')">Age</p>
                    <p @click="showFilter = false; setSortBy('players')">Nombre de joueurs</p>
                    <p @click="showFilter = false; setSortBy('distance')">Distance</p>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            showFilter: false,
            searchByGame: '',
            showResults: true,
        }
    },
    computed: {
        ...mapState(['sortBy']),
        ...mapGetters([
            'allGames',
            'matchedGames'
        ])
    },
    methods: {
        ...mapMutations([
            'setSearchKey',
            'setMatchedGames',
            'setSortBy'
        ]),
        setSearchGame(game) {
            console.log(game)
            this.setMatchedGames(game)
            this.showResults=false;
        },
        reset() {
            this.setSearchKey('')
            this.searchByGame = ''
        }
    }

}
</script>
