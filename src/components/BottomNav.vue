<template>
  <v-bottom-navigation class="sticky bottom-0" fixed>
    <v-btn v-on:click="goTo('home')"
      ><span>Catalogue</span>
      <v-icon>mdi-home</v-icon>
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

  methods: {
    goTo(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>
