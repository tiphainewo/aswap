<template>
  <div
    class="flex flex-col h-full bg-[#EDEEB6] px-5 pt-5 pb-15 gap-5 items-center justify-start"
  >
    <div class="absolute right-5 top-15">
      <v-btn icon color="secondary" @click="$router.push('/')"><v-icon>mdi-logout</v-icon></v-btn>
    </div>
    <div class="flex flex-col flex-none items-center">
      <v-avatar size="90">
        <v-img src="@/assets/userPP.png"></v-img>
      </v-avatar>
      <p class="font-semibold !m-0">Lucas Chalamet</p>
      <v-rating
        color="secondary"
        length="5"
        :value="4.5"
        dense
        half-increments
        small
      ></v-rating>
      <v-btn rounded depressed small color="secondary" @click="createGame()"
        >Ajouter un jeu</v-btn
      >
    </div>

    <div class="flex flex-col flex-none w-screen items-stretch">
      <p class="font-bold text-lg text-primary !m-0">Jeux empruntés</p>
      <div class="grid gap-2 grid-cols-2">
        <div v-for="game of borrowedGames" v-bind:key="game.id">
          <SmallGameCard :game="game" :user="users[0]" @select-user="openGame">
          </SmallGameCard>
        </div>
      </div>
    </div>

    <div class="flex flex-col flex-none w-screen items-stretch">
      <p class="font-bold text-lg text-primary !m-0">Mes jeux</p>
      <div class="grid gap-2 grid-cols-2">
        <div v-for="game of userGames" v-bind:key="game.id">
          <SmallGameCard :game="game" :user="user" @select-user="openGame">
          </SmallGameCard>
        </div>
      </div>
    </div>

    <v-overlay
      :value="overlay"
      :opacity="0.2"
      v-on:click.stop="overlay = false"
    ></v-overlay>

    <div
      v-if="overlay"
      class="bg-white rounded-t-3xl h-[80%] text-black w-screen p-5 bottom-0 left-0 z-10 fixed"
    >
      <GameCardExpanded
        v-if="selectedGame && selectedGame.name"
        :game="selectedGame"
        :user="selectedUser"
        :userGame="!selectedUser.id"
        @delete-game="deleteGame"
      />
      <GameCreation v-else @select-game="selectGame" />
    </div>
  </div>
</template>

<script lang="ts">
import GameCardExpanded from "../GameCardExpanded.vue";
import SmallGameCard from "../SmallGameCard.vue";
import GameCreation from "../GameCreation.vue";

export default {
  components: { SmallGameCard, GameCardExpanded, GameCreation },

  props: ["games", "users"],

  methods: {
    openGame(payload) {
      this.overlay = !this.overlay;
      this.selectedGame = payload.game;
      this.selectedUser = payload.user;
    },
    closeGame() {
      this.overlay = false;
      this.selectedGame = {};
    },
    selectGame(game) {
      this.userGames.push(game);
      this.overlay = false;
    },
    createGame() {
      this.overlay = true;
    },
    deleteGame(game) {
      this.closeGame();
      let index = this.userGames.indexOf(game);
      if (index !== -1) {
        this.userGames.splice(index, 1);
      }
    },
  },

  data() {
    return {
      overlay: false,
      selectedGame: {},
      selectedUser: {},
      user: {
        firstName: "Lucas",
        lastName: "Chalamet",
        userImage: "@/assets/userPP.png",
      },
      borrowedGames: [
        {
          id: 1,
          image_url:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1600449593257",
          name: "Cluedo",
          min_players: 3,
          max_players: 6,
          min_age: 10,
          description:
            "The classic detective game! In  Clue , players move from room to room in a mansion to solve the mystery of: who done it, with what, and where? Players are dealt character, weapon, and location cards after the top card from each card type is secretly placed in the confidential file in the middle of the board. Players must move to a room and then make an accusation against a character saying they did it in that room with a specific weapon. The player to the left must show one of any cards accused to the accuser if in that player's hand. Through deductive reasoning each player must figure out which character, weapon, and location are in the secret file. To do this, each player must uncover what cards are in other players hands by making more and more accusations. Once a player knows what cards the other players are holding, they will know what cards are in the secret file. A great game for those who enjoy reasoning and thinking things out.",
        },
        {
          id: 2,
          image_url:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1609460299342",
          name: "Monopoly",
          min_players: 2,
          max_players: 5,
          min_age: 8,
          description:
            "<p>Get a handy way to play the classic property-trading game! Be the first collect 3 full property sets of different colors, and you’ll win the <strong>Monopoly Deal Card Game</strong>.</p>\r\n<p>You’ll pick up cards when it's your turn and play Action cards to charge players rent, steal their cards or demand money for your birthday. Build up property sets, gather piles of money and keep wheeling and dealing until you're the Monopoly Deal winner!</p>",
        },
      ],
      userGames: [
        {
          id: 3,
          image_url:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1596731709416",
          name: "Uno",
          min_players: 2,
          max_players: 10,
          min_age: 8,
          description:
            "<p>Phase 10 is the rummy-type card game where players compete against one another to see who can complete 10 varied phrases first! </p>\r\n<p>A phase is a combination of cards and can be composed of sets (multiple cards of the same value), runs (multiple cards in consecutive ascending order), cards of one color, or a combination of these. Each phase to be completed is specific to each hand dealt, meaning you need to complete the current phase in order to advance to the next one! Finish all 10 and win the game!</p>\r\n<p>Featured in each deck are “Wild” and “Skip” cards that deliver game-changing moments! A “Wild” card can be used in place of a number card, as well as be used as any color to complete any phase, while a “Skip” card causes your opponent to lose a turn!</p>\r\n<p>Includes 108 cards and instructions.</p>",
        },
        {
          id: 4,
          image_url:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257781337-41wxuhziKqL.jpg",
          name: "Time's Up",
          min_players: 4,
          max_players: 18,
          min_age: 12,
          description:
            "The party-perfect celebrity charades game that builds the laughter and excitement in three hilarious rounds. You have 30 seconds to get your team to guess as many celebrity names in the Deck of Fame as possible. Round 1, say or do anything; Round 2, use just one word; and Round 3, gestures only ... no words allowed! Comes with over 850 names, the basic sand timer, PLUS rules for a 4th round of &quot;freeze-frame&quot; fun and laughter!<br />",
        },
      ],
    };
  },
};
</script>
