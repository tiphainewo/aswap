<template>
  <div class="wrapper">
    <img :src="require(`@/assets/${user.image}`)" alt="" class="thumbnail">
    <h3 class="title">{{user.name}}</h3>
    <div class="ratings">
        <img src="@/assets/ystar.png" alt="" class="y-star" v-for="i in Math.floor(user.rating)" :key="i+10">
        <img src="@/assets/bstar.png" alt="" class="b-star" v-for="i in  Math.floor(5-Math.floor(user.rating))" :key="i+20">
    </div>
    <button class="addGame">Ajouter un jeu</button>

    <div class="gamesWrapper">
        <h4>Jeux empruntes</h4>
        <div class="games">
            <div v-for="(game,index) in user.borrowedGames" :key="index"><Game :game="game"/></div>
        </div>
    </div>
    <div class="gamesWrapper">
        <h4>Jeux pretes</h4>
        <div class="games">
            <div v-for="(game,index) in user.rentedGames" :key="index"><Game :game="game"/></div>
        </div>
    </div>

  </div>
</template>

<script>
import Game from '@/components/Game.vue'
import { mapState } from 'vuex'
export default {
    components:{
        Game
    },
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(['user'])
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;

    .thumbnail{
        width: 120px;
        height: 120px;
        border: 1px solid #fff;
        padding: 5px;
        border-radius: 50%;
    }
    .ratings{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
        img{
            width: 20px;
            margin: 2px;
        }
    }
    .addGame{
        padding: 5px 20px;
        font-size: 18px;
        border-radius: 10px;
        background-color: #EB6440;
        cursor: pointer;
        transition: all .25s;
        margin: 10px 0;

        &:active{
            transform: scale(.95);
        }
    }

    h4{
        text-align: left;
        align-self: flex-start;
    }
    .gamesWrapper{
        width: 100%;
        max-width: 800px;
        margin-top: 30px;
    }
    .games{
        width: 100%;
        padding: 10px;
        display: grid;    
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(240px, max-content));
        justify-items: center;
        @media only screen and (max-width:480px){
        grid-template-columns: repeat(auto-fit, minmax(160px, max-content));
            }
        
    }
}

</style>