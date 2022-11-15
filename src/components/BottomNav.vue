<template>
  <v-bottom-navigation color="primary" fixed grow shift>
    <v-btn v-on:click="goTo('home')"
      ><span>Catalogue</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('map')"
      ><span>Carte</span>
      <v-icon>mdi-map</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('chat')"
      ><span>Discussions</span>
      <v-icon>mdi-forum</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('profile')"
      ><span>Profil</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",

  data() {
    return {};
  },

  methods: {
    goTo(page) {
      this.$router.push(`/${page}`);
    },
  },

  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
};
</script>
