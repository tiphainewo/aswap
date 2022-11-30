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

      <v-divider class="mt-2"></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title> jeux de moments</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" color="grey">Sort by :</v-btn>
        <v-btn variant="text" color="">Name</v-btn>
        <v-btn variant="text" color="grey">Popularity</v-btn>
        <v-btn variant="text" color="grey">Price</v-btn>
      </v-toolbar>
      <v-row>
        <v-col cols="12" sm="3" v-for="(game, i) in games" :key="i">
          <v-card height="300" align="center" flat outlined tile>
            <v-img :src="game.image" width="200" height="200" contain></v-img>
            <v-card-text class="mt-n1">
              <strong>{{ game.title }}</strong>
            </v-card-text>
            <v-card-text class="mt-n4">
              <strong>{{ game.price }}</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title class="text-caption">Show more games</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon color="grey" left class="mr-4 mt-n1"
          >fas fa-long-arrow-alt-left</v-icon
        >
        <span class="text-caption">3</span>
        <v-icon color="grey" left class="ml-4 mt-n1 mr-2"
          >fas fa-long-arrow-alt-right</v-icon
        >
      </v-toolbar>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>
import games from "../../data/games.json";
import users from "../../data/users.json";

export default {
  name: "App",
  data: function () {
    return {
      games: games,
      users: users,
      title: "Endorfine",
      imageLink: {
        main: "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
        logo: "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4",
      },
    };
  },
  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    },
  },

  computed: {
    imgHeight: function () {
      var offset = 320;
      return this.pageHeight - offset;
    },
  },
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
