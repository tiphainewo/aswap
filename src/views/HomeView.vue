<template>
  <div class="home">  
    <Filters/>
    <div class="games">
      <div @click="setSelectedGameToView(game)" v-for="(game, index) in matchedGames" :key="index"><Game :game="game"/></div>
    </div> 
    <div class="overlay" v-if="showGameView" @click="showGameView=false" ></div>
    <div class="game-view" :class="showGameView?'':'close'">
      <GameView :game="selectedGame"/>
    </div> 
    <img src="@/assets/down-arrow.png" alt="" class="dropdown" :class="showGameView?'':'close'" @click="showGameView=false">
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
// @ is an alias to /src
import Filters from '@/components/Filter.vue'
import Game from '@/components/Game.vue'
import GameView from '@/components/GameView.vue'

export default {
  name: 'HomeView',
  data(){
    return{
      showGameView:false,
    }
  },
  computed:{
      ...mapState(['selectedGame']),
      ...mapGetters([
          'matchedGames',
      ])
    },
    methods:{
      ...mapMutations(['setSelectedGame']),
      setSelectedGameToView(game){
        this.setSelectedGame(game)
        this.showGameView=true
      }
    },
  components: {
    Filters,
    Game,
    GameView
  }
}
</script>
<style lang="scss" scoped>

  .games{
    padding: 10px;
    width: 100%;
    max-width: 980px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: grid;    
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(240px, max-content));
    justify-content: center;
    justify-items: center;
    @media only screen and (max-width:480px){
      grid-template-columns: repeat(auto-fit, minmax(160px, max-content));
        }
    
  }
  .overlay{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
  }
  .game-view{
    width: 100%;
    height: 80vh;
    max-width: 500px;
    margin-left: 50%;
    transform: translateX(-50%);
    position: fixed;
    bottom: 0;
    background-color: #497174;
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 20px 20px 0 0;
    border: 2px solid #ffffff;
    border-bottom: none;
    box-shadow: 0 0 10px 10px rgba(7, 7, 7, 0.4);
    transition: all .25s;
    padding-bottom: 50px;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
  .dropdown{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
    background-color: #ffffffda;
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%); 
    z-index:999;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.4);
  }
  .close{
    bottom: -85vh;
  }
</style>
