<template>
  <v-app>
    <v-main>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{user.firstName}}
        </li>
      </ul>
      <router-view :users="users" :games="games" @addUser="addUser" />

      <BottomNav />
    </v-main>
  </v-app>
</template>

<script>
import BottomNav from ".//components/BottomNav";
import usersJSON from "./data/users.json";
import User from "./classes/User"
import gamesJSON from "./data/games.json";
import Game from "./classes/Game"

export default {
  name: "App",
  emits: ['addUser'],

  components: {
    BottomNav,
  },


  data: function () {
    return {
     
    }
  },

  computed: {
    users() {
      let usersArray=[];
      for (let user of usersJSON.users) {
        usersArray.push(new User(user.id, user.firstName, user.lastName, user.image, user.city))
      }
      return usersArray;
    },

    games() {
      let gamesArray=[];
      for (let game of gamesJSON.games) {
        gamesArray.push(new Game(game.gameId, game.gameName, game.gameImage, game.userId))
      }
      return gamesArray;
    }
  },

  methods: {
    addGame: function(game) {
      this.games.push(game);
      console.log(this.games)
    },

    addUser: function(user) {
      this.users.push(user);
      console.log(this.users)
    },
  },
  
};

</script>
