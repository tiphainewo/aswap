<template>
  <div
    class="rounded-lg flex flex-row bg-light-500 border-1 w-full p-2 pb-0 items-start"
    @click="$emit('select-game', game)"
  >
    <img
      class="rounded-lg object-contain bg-grey-500 h-28 mb-2 min-w-30 w-30"
      :src="game.image_url"
      v-if="game.image_url"
    />
    <div v-else class="rounded-lg bg-grey-500 h-28 mb-2 min-w-30 w-30"></div>

    <div class="flex flex-col h-30 px-3 justify-between overflow-hidden">
      <div>
        <p class="font-bold truncate !m-0">{{ game.name }}</p>
      </div>
      <v-chip-group color="secondary">
        <v-chip small color="secondary">Jeu de plateau</v-chip>
        <v-chip small color="secondary"
          >{{ game.min_players }}-{{ game.max_players }} joueurs</v-chip
        >
        <v-chip small color="secondary">{{ game.min_age }}+ ans</v-chip>
      </v-chip-group>
    </div>
  </div>
</template>

<script>
export default {
  props: ["game"],
};
</script>
