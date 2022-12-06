<template>
  <div class="flex flex-col h-full w-full p-2 justify-between">
    <div>
      <p class="font-bold text-xl">Ajouter un jeu</p>
      <v-text-field
        append-icon="mdi-magnify"
        hint="Recherchez votre jeux dans notre base de données"
        label="Nom du jeu"
        v-model="gameName"
        @input="fetchGames()"
      ></v-text-field>

      <div v-if="!selectedGame || !selectedGame.name">
        <p>Résultats</p>
        <div
          v-if="gameName && gameName !== ''"
          class="flex flex-col gap-2 overflow-y-auto"
        >
          <NewGameCard
            :game="game"
            v-for="game in games"
            @select-game="selectGame"
          ></NewGameCard>
        </div>
      </div>

      <div v-else>
        <p>Jeux selectionné</p>
        <NewGameCard :game="selectedGame"></NewGameCard>
      </div>
    </div>
    <v-btn
      depressed
      class="w-full"
      color="secondary"
      rounded
      @click="$emit('select-game', selectedGame)"
      :disabled="!(selectedGame && selectedGame.name)"
      >Ajouter le jeu</v-btn
    >
  </div>
</template>

<script>
import axios from "axios";
import NewGameCard from "./NewGameCard.vue";

export default {
  data() {
    return {
      gameName: "",
      games: [],
      selectedGame: {},
    };
  },
  methods: {
    fetchGames() {
      axios
        .get(
          `https://api.boardgameatlas.com/api/search?name=${this.gameName}&fuzzy_match=true&limit=3&client_id=z6FWVq6sRg`
        )
        .then((response) => (this.games = response.data.games))
        .catch((error) => console.log(error));
    },
    selectGame(game) {
      console.log(game);
      this.gameName = "";
      this.selectedGame = game;
    },
  },
  components: { NewGameCard },
};
</script>
