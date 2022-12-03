<template>
  <v-bottom-navigation
    fixed
    grow
    shift
    color="secondary"
    background-color="primary"
  >
    <v-btn v-on:click="goTo('games')" color="primary" class="!h-full"
      ><span>Jeux</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('map')" color="primary" class="!h-full"
      ><span>Carte</span>
      <v-icon>mdi-map</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('inbox')" color="primary" class="!h-full"
      ><span>Discussions</span>
      <v-icon>mdi-forum</v-icon>
    </v-btn>

    <v-btn v-on:click="goTo('profile')" color="primary" class="!h-full"
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
