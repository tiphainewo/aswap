<template>
  <v-bottom-navigation class="sticky bottom-0" fixed>
    <v-btn
      ><span>Discussions</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn
      ><span>Mes réservations</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn
      ><span>Catalogue</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",
};
</script>
