<template>
  <v-app>
      <v-app-bar color="primary" class="align-start h-2">
        <div v-on:click="goTo('/')">
          <img :src="`${publicPath}logo_colors.png`" class="object-contain w-1/2" />
        </div>
      </v-app-bar>
      <router-view :users="users" :games="games" @addUser="addUser"/>
      <BottomNav />

  </v-app>
</template>

<script>
import BottomNav from ".//components/BottomNav";
import usersJSON from "./data/users.json";
import User from "./classes/User";
import gamesJSON from "./data/games.json";
import Game from "./classes/Game";

export default {
  name: "App",
  emits: ["addUser"],

  components: {
    BottomNav,
  },

  data: function () {
    return {
      publicPath: process.env.BASE_URL
    };
  },

  computed: {
    users() {
      let usersArray = [];
      for (let user of usersJSON.users) {
        usersArray.push(
          new User(
            user.id,
            user.firstName,
            user.lastName,
            user.userImage,
            user.city,
            user.coordinates
          )
        );
      }
      return usersArray;
    },

    games() {
      let gamesArray = [];
      for (let game of gamesJSON.games) {
        gamesArray.push(
          new Game(game.gameId, game.gameName, game.gameImage, game.userId)
        );
      }
      return gamesArray;
    },
  },

  methods: {
    addGame: function (game) {
      this.games.push(game);
    },

    addUser: function (user) {
      this.users.push(user);
    },
    goTo(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>