<template>
  <v-bottom-navigation class="sticky bottom-0 w-full" fixed>
    <v-btn v-on:click="goTo('home')"
      ><span v-if="currentPage === 'home'">Catalogue</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('map')"
      ><span v-if="currentPage === 'map'">Carte</span>
      <v-icon>mdi-map</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('chat')"
      ><span v-if="currentPage === 'chat'">Discussions</span>
      <v-icon>mdi-forum</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('profile')"
      ><span v-if="currentPage === 'profile'">Profil</span>
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
