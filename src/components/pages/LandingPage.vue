<template>
  <v-app>
<NavBar />
<v-container fluid>
  <v-card
        color="#F7F7F7"
        height="180px"
        tile
        flat
        class="d-flex align-center justify-center mt-12"
        dark
      >
        <v-row>
          <v-col cols="12" sm="12">
            <v-item-group mandatory class="mt-n1">
              <v-container>
                <v-row justify="center" class="space">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="4"
                    md="2"
                    v-for="(cetegory, i) in categories"
                    :key="i"
                  >
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? '#D5F0DB' : 'white'"
                        :class="active ? 'borderme' : 'borderout'"
                        class="d-flex align-center rounded-lg mx-2"
                        dark
                        height="170"
                        @click="toggle"
                        flat
                      >
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-list-item three-line class="text-center">
                              <v-list-item-content>
                                <div align="center" justify="center">
                                  <v-img
                                    :src="cetegory.img"
                                    max-height="80"
                                    max-width="80"
                                    contain
                                  ></v-img>
                                </div>
                                <v-list-item-subtitle
                                  :class="
                                    active ? 'green--text' : 'black--text'
                                  "
                                  class="caption mt-4"
                                  >{{ cetegory.title }}</v-list-item-subtitle
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-col>
        </v-row>
      </v-card>
      
      <v-divider class=mt-2></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title> jeux de moments</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" color="grey">Sort by :</v-btn>
        <v-btn variant="text" color="">Name</v-btn>
        <v-btn variant="text" color="grey">Popularity</v-btn>
        <v-btn variant="text" color="grey">Price</v-btn>
      </v-toolbar>
      <v-row>
          <v-col cols="12" sm="3" v-for="(game,i) in games" :key="i" >
              <v-card height="300" align="center" flat outlined tile>
                
                <v-img :src="game.image" width="200" height="200" contain></v-img>
                <v-card-text class="mt-n1">
                  <strong>{{game.title}}</strong>
                </v-card-text>
                <v-card-text class="mt-n4">
                  <strong>{{game.price}}</strong>
                </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-toolbar color="white">
        <v-toolbar-title class="text-caption">Show more games</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon color="grey" left class="mr-4 mt-n1">fas fa-long-arrow-alt-left</v-icon>
        <span class="text-caption">3</span>
        <v-icon color="grey" left class="ml-4 mt-n1 mr-2">fas fa-long-arrow-alt-right</v-icon>
      </v-toolbar>
</v-container>
<FooterView />
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from './NavBar.vue';
import FooterView from './FooterView.vue';

export default defineComponent({
  name: 'App',
setup(){
  return {
   game : true,
    other: false,
    slider2: 50,
    categories: [
    { img: "jeuSos.png", title: "Jeux de Societé " },
        { img: "puzzle.jpg", title: "puzzle" },
        { img: "joker.png", title: "jeux de carte" },
        { img: "class.jpg", title: "jeux de stratégie " },
            { img: "rome.png", title: "jeux de role" },
            { img: "hazard.png", title: "accessoires" },
    ],
   games:[
    {
          class: "pa-0",
          image: "programmino.jpg",
          title: "programmino",
          price: "€ 14.00",
        },
     
        {
          class: "pa-0",
          image: "marvel-crisis.jpg",
          title: "marvel-crisis",
          price: "€ 19.00",
        },
        {
          class: "pa-0",
          image: "vegas.jpg",
          title: "las vegas",
          price: "€ 28.00",
        },
        {
          class: "pa-0",
          image: "triominos-onyx.jpg",
          title: "triominos-onyx",
          price: "€ 24.00",
        },
        {
          class: "pa-0",
          image: "mysterium-kids-le-tresor-du-capitaine-bouh.jpg",
          title: "mysterium-kids-le-tresor-du-capitaine-bouh",
          price: "€ 33.00",
        },
        {
          class: "pa-0",
          image: "cubirds.jpg",
          title: "cubirds",
          price: "€ 23.00",
        },
        {
          class: "pa-0",
          image: "skyjo.jpg",
          title: "skyjo",
          price: "€ 15.00",
        },
        {
          class: "pa-0",
          image: "c1.jpg",
          title: "marvel-crisis",
          price: "€ 21.00",
        },
        {
          class: "pa-0",
          image: "small-world.jpg",
          title: "small-world",
          price: "€ 17.00",
        },
        {
          class: "pa-0",
          image: "between-two-castle-of-mad-king-ludwig.jpg",
          title: "between-two-castle-of-mad-king-ludwig",
          price: "€ 18.00",
        },
        {
          class: "pa-0",
          image: "festi-park.jpg",
          title: "festi-parke",
          price: "€ 26.00",
        },
        {   
          class: "pa-0",
          image: "masters-of-the-universe-battleground.jpg",
          title: "masters-of-the-universe-battleground",
          price: "€ 28.00",
        },
        {
          class: "pa-0",
          image: "exit le-labyrinthe-maudit-.jpg",
          title: "exit le-labyrinthe-maudit-",
          price: "€ 25.00",
        },
        {
          class: "pa-0",
          image: "brazil.jpg",
          title: "brazil imperial ",
          price: "€ 19.00",
        },
        {
          class: "pa-0",
          image: "warhammer.jpg",
          title: "warhammer",
          price: "€ 35.00",
        },
        {
          class: "pa-0",
          image: "sos-titanic.jpg",
          title: "sos-titanic",
          price: "€ 25.00",
        },
    ]
  }
}, 
  components: {
    NavBar,
    FooterView
},
});
</script>
<style scoped>
  .v-container{
    width: 100%;
    padding: 16px 0px !important;
    margin-right: auto;
    margin-left: auto;
  }
  .v-card.borderme {
    border: 2px solid black !important;
  }
  .v-card.borderout {
    border: 1px solid #d5f0db !important;
  }
</style>