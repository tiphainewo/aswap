<template>
    <div class="flex flex-col w-full gap-4">
        <div>
            <v-text-field hide-details solo clearable append-icon="mdi-magnify" placeholder="Nom du jeu"
                v-model="searchByGame" @input="setSearchKey(searchByGame)">

            </v-text-field>

            <div class="bg-white text-black p-5 rounded-b-md" v-show="searchByGame.length > 0">
                <p  @click="setSearchGame(game)" v-for="(game, index) in matchedGames" :key="index">
                    {{ game.title }}</p>
            </div>
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
                    <p  @click="showFilter = false; setSortBy('type')">Type de jeu</p>
                    <p  @click="showFilter = false; setSortBy('age')">Age</p>
                    <p  @click="showFilter = false; setSortBy('players')">Nombre de joueurs</p>
                    <p  @click="showFilter = false; setSortBy('distance')">Distance</p>
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
            this.setMatchedGames(game)
        },
        reset() {
            this.setSearchKey('')
            this.searchByGame = ''
        }
    }

}
</script>

<style lang="scss" scoped>


.wrapperSearch {
    width: 100%;
    max-width: 400px;
    background-color: #EB6440;
    color: #fff;
    border-radius: 20px;
    margin-bottom: 20px;

    .items {
        margin-top: 10px;
    }

    .item {
        padding: 5px 0;
        cursor: pointer;

        &:hover {
            background-color: #d66140;
            border-radius: 20px;
        }
    }
}

.searchGame {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .clear {
        position: absolute;
        top: 9px;
        right: 35px;
        width: 12px;
        cursor: pointer;
    }

    .icon {
        position: absolute;
        top: 5px;
        right: 10px;
        width: 20px;
    }

    input[type="text"] {
        width: 100%;
        border-radius: 10px;
        border: 2px solid #497174;
        padding: 5px 10px;
        padding-right: 50px;
        font-size: 16px;
        background-color: #ffffff;

    }
}

.filterByType {
    width: 100%;
    max-width: 400px;
    background-color: #497174;
    padding: 15px;
    border-radius: 20px;
    color: #fff;

    }

    .items {
        border-top: 1px solid rgba(255, 255, 255, 0.575);
        padding-top: 10px;
        margin-top: 10px;

        .item {
            padding: 5px 0;
            color: #D6E4E5;

            &:hover {
                background-color: #32494b;
                color: #fff;
                border-radius: 20px;
                cursor: pointer;
            }
        }
    }

</style>