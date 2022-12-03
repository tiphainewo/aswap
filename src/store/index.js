import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchByName: '',
    sortBy: '',
    selectedGame: {},
    games: [],
    matchedGames: [],
    user: {
      image: 'contact.png',
      name: 'Yaceen',
      rating: 4,
      borrowedGames: [

        {
          name: 'Game 1',
          image: 'game.jpg',
          distance: 50,
          owner: 'Nasir',
          ownerImage: 'contact.png',
          tags: ['tag'],
          type: 'card game',
          minPlayers: 3,
          maxPlayers: 5,
          age: 6,
          rating: 3
        },
        {
          name: 'Game 2',
          image: 'game.jpg',
          distance: 30,
          owner: 'Ali',
          ownerImage: 'contact.png',
          tags: ['tag1'],
          type: 'other game',
          age: 5,
          minPlayers: 2,
          maxPlayers: 4,
          rating: 2
        }
      ],
      rentedGames: [
        {
          name: 'Game 3',
          image: 'game.jpg',
          distance: 40,
          owner: 'Yacin',
          ownerImage: 'contact.png',
          tags: ['tag2'],
          type: 'card game',
          minPlayers: 4,
          maxPlayers: 8,
          age: 8,
          rating: 4
        },
      ]
    }
  },



  getters: {
    allGames: (state) => {
      return state.games
    },
    matchedGames: (state) => {
      if (state.searchByName.trim() === '') {
        state.matchedGames = state.games
      }
      // if (state.sortBy === 'type') {
      //   state.matchedGames.sort((a, b) => {
      //     let fa = a.type.toLowerCase(),
      //       fb = b.type.toLowerCase();
      //     if (fa < fb) { return -1; }
      //     if (fa > fb) { return 1; }
      //     return 0;
      //   });
      // }
      else if (state.sortBy === 'age') {
        state.matchedGames.sort((a, b) => {
          return a.min_age - b.min_age;
        });
      }
      else if (state.sortBy === 'players') {
        state.matchedGames.sort((a, b) => {
          return a.max_players - b.max_players;
        });
      }
      else if (state.sortBy === 'distance') {
        state.matchedGames.sort((a, b) => {
          return a.distance - b.distance;
        });
      } else {
        state.matchedGames.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
          if (fa < fb) { return -1; }
          if (fa > fb) { return 1; }
          return 0;
        });
      }
      return state.matchedGames
    }
  },
  mutations: {
    setSearchKey(state, val) {
      state.searchByName = val
      state.matchedGames = state.games.filter((el) => {
        return el.name.toLowerCase().includes(state.searchByName)
      })
    },
    setMatchedGames(state, val) {
      state.matchedGames = []
      state.matchedGames.push(val)
    },
    setSelectedGame(state, val) {
      state.selectedGame = val
    },
    setSortBy(state, val) {
      state.sortBy = val
      if (val === '') {
        state.matchedGames = state.games
      }
    },
    SET_Items(state, items) {
      state.games = items;
      state.matchedGames = items;
    }

  },
  actions: {
    loadItems({ commit }) {
      axios
        .get('https://api.boardgameatlas.com/api/search?limit=100&client_id=z6FWVq6sRg')
        .then(response => (this.info = response.data.games))
        .then(items => {
          commit('SET_Items', items)
        })
        .catch(error => console.log(error))

    }
  },
  modules: {
  }
})
