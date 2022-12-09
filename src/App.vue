<template>
  <v-app>
    <v-app-bar color="primary" class="align-start h-2" flat>
      <div v-on:click="goTo()">
        <img :src="`${publicPath}logo_colors.png`" class="object-contain w-1/2" />
      </div>
    </v-app-bar>
    <router-view :users="users" @addUser="addUser" :loggedIn="loggedIn"/>
    <BottomNav />

  </v-app>
</template>

<script>
import BottomNav from ".//components/BottomNav";
import usersJSON from "./data/users.json";
import User from "./classes/User";
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: "App",
  emits: ["addUser"],

  components: {
    BottomNav,
  },

  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      loggedIn: false
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
            user.long,
            user.lat,
            user.gamesOwned
          )
        );
      }
      return usersArray;
    },

  },

  methods: {

    addUser: function (user) {
      this.users.push(user);
      this.loggedIn=true;
    },
    goTo() {
      this.$router.push(`/home`);
    },
  },
};
</script>