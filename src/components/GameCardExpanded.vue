<template>
  <div class="rounded flex flex-col h-full w-full p-2 content-between">
    <div
      class="flex flex-col w-full gap-2 place-start justify-start overflow-y-auto"
    >
      <img
        class="rounded-lg object-contain bg-grey-500 h-40 w-full"
        :src="game.image_url"
      />

      <div class="font-bold text-xl mb-3">{{ game.name }}</div>
      <div class="flex flex-row flex-none gap-2 items-center">
        <div class="text-center">
          <v-avatar size="30" v-if="user.userImage">
            <v-img
              :src="user.userImage"
              v-if="user.firstName != 'Lucas'"
            ></v-img>
            <v-img src="@/assets/userPP.png" v-else></v-img>
          </v-avatar>

          {{ user.firstName }} {{ user.lastName }}
        </div>
        <v-rating
          color="secondary"
          length="5"
          :value="4.5"
          dense
          half-increments
          small
        ></v-rating>
      </div>
      <div v-if="!userGame" class="text-xs text-grey-400 !m-0">
        A 1.5km
        <span
          class="ml-2 text-gray-600 underline"
          v-on:click="$router.push('/map')"
          >Voir sur la carte</span
        >
      </div>

      <div class="mb-4">
        <v-chip class="mr-1" small color="secondary">Jeu de plateau</v-chip>
        <v-chip class="mr-1" small color="secondary"
          >{{ game.min_players }}-{{ game.max_players }} joueurs</v-chip
        >
        <v-chip small color="secondary">{{ game.min_age }}+ ans</v-chip>
      </div>

      <div>
        <div class="w-full max-h-50 overflow-hidden overflow-ellipsis">
          <div v-html="game.description"></div>
        </div>
        <p class="text-gray-600 underline">Voir plus</p>
      </div>
    </div>

    <v-btn
      v-if="!userGame"
      depressed
      class="w-full"
      color="secondary"
      rounded

      @click="$router.push({ path: `/chat/${user.id}`, query: { game: game.name }})"
      >Envoyer une demande</v-btn
    >
    <v-btn
      v-else
      depressed
      class="w-full"
      color="secondary"
      rounded
      @click="$emit('delete-game', game)"
      >Supprimer mon jeu</v-btn
    >
  </div>
</template>

<script>
export default {
  props: ["game", "user", "userGame"],
};
</script>
