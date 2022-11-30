<template>
    <div class="wrapper">
    <div class="filters">
        <div class="wrapperSearch">
            <div class="searchGame">
                <input type="text" class="searchName" placeholder="Nom du jeu" v-model="searchByGame" @input="setSearchKey(searchByGame)">
                <img src="@/assets/clear.png" alt="" class="clear" @click="reset" v-if="searchByGame.length>0">
                <img src="@/assets/search.png" alt="" class="icon">
            </div>
            <div class="items" v-show="searchByGame.length>0">
                <p class="item" @click="setSearchGame(game)" v-for="(game, index) in matchedGames" :key="index">{{game.title}}</p>
            </div>
        </div>
        <div class="filterByType">
            <div class="header" @click="showFilter =  !showFilter">
                <h3>Filters</h3>
                <p v-if="sortBy.length>0">{{sortBy.toUpperCase()}}*</p>
                <div class="icons">
                    <img src="@/assets/clear.png" alt="" v-if="sortBy.length>0" @click.stop="setSortBy('')" class="icon close">
                    <img src="@/assets/up-arrow.png" alt="" class="icon" v-if="showFilter">
                    <img src="@/assets/down-arrow.png" alt="" class="icon" v-else>
                </div>
            </div>
            <div class="items" v-if="showFilter">
                <p class="item" @click="showFilter=false; setSortBy('type')">Type de jeu</p>
                <p class="item" @click="showFilter=false; setSortBy('age')">Age</p>
                <p class="item" @click="showFilter=false; setSortBy('players')">Nb de joueurs</p>
                <p class="item" @click="showFilter=false; setSortBy('distance')">Distance</p>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
    data(){
        return{
            showFilter:false,
            searchByGame:'',
        }
    },
    computed:{
        ...mapState(['sortBy']),
        ...mapGetters([
            'allGames',
            'matchedGames'
        ])
    },
    methods:{
        ...mapMutations([
            'setSearchKey',
            'setMatchedGames',
            'setSortBy'
        ]),
        setSearchGame(game){
            this.setMatchedGames(game)
        },
        reset(){
            this.setSearchKey('')
            this.searchByGame = ''
        }
    }

}
</script>

<style lang="scss" scoped>
.searchResult{
    background-color: #EB6440;
    .item{
        padding: 5px 0;
        cursor: pointer;
        &:hover{
            background-color: #d66140;
        }
    }
}
.filters{
    margin-left: 50%;
    transform: translateX(-50%);
    max-width: 800px;
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .wrapperSearch{
        width: 100%;
        max-width: 400px;
        background-color: #EB6440;
        color: #fff;
        border-radius: 20px;
        margin-bottom: 20px;
        
        .items{
            margin-top: 10px;
        }
        .item{
            padding: 5px 0;
            cursor: pointer;
            &:hover{
                background-color: #d66140;
                border-radius: 20px;
            }
        }
    }
    .searchGame{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .clear{
            position: absolute;
            top: 9px;
            right: 35px;
            width: 12px;
            cursor: pointer;
        }
        .icon{
            position: absolute;
            top: 5px;
            right: 10px;
            width: 20px;
        }
        input[type="text"]{
            width: 100%;
            border-radius: 10px;
            border: 2px solid #497174;
            padding: 5px 10px;
            padding-right: 50px;
            font-size: 16px;
            background-color: #ffffff;
            
        }
    }
    .filterByType{
        width: 100%;
        max-width: 400px;
        background-color: #497174;
        padding: 15px;
        border-radius: 20px;
        color: #fff;
        .header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .icons{
                display: flex;
                align-items: center;
                .close{
                    width: 15px;
                    margin-right: 10px;
                }
            }
            .icon{
                width: 25px;
            }
            &:hover{
                cursor: pointer;
            }
        }
        .items{
            border-top: 1px solid rgba(255, 255, 255, 0.575);
            padding-top: 10px;
            margin-top: 10px;
            .item{
                padding: 5px 0;
                color: #D6E4E5;
                &:hover{
                    background-color: #32494b;
                    color: #fff;
                    border-radius: 20px;
                    cursor: pointer;
                }
            }
        }
    }
}

</style>