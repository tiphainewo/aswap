import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchByName:'',
    sortBy:'',
    selectedGame:{
      title:'Game 3',
      image:'game.jpg',
      distance:10,
      owner:'Yacin',
      ownerImage:'contact.png',
      tags:['tag2'],
      type:'card game',
      players:'2-4',
      minPlayers:2,
      maxPlayers:4,
      age:7,
      rating:4
    },
    games:[
      {
        title:'Game 1',
        image:'game.jpg',
        distance:50,
        owner:'Nasir',
        ownerImage:'contact.png',
        tags:['tag'],
        type:'card game',
        minPlayers:3,
        maxPlayers:5,
        age:6,
        rating:3
    },
      {
        title:'Game 2',
        image:'game.jpg',
        distance:30,
        owner:'Ali',
        ownerImage:'contact.png',
        tags:['tag1'],
        type:'other game',
        age:5,
        minPlayers:2,
        maxPlayers:4,
        rating:2
    },
      {
        title:'Game 3',
        image:'game.jpg',
        distance:40,
        owner:'Yacin',
        ownerImage:'contact.png',
        tags:['tag2'],
        type:'card game',
        minPlayers:4,
        maxPlayers:8,
        age:8,
        rating:4
    },

    ],
    matchedGames:[],
    user:{
      image:'contact.png',
      name:'Yaceen',
      rating:4,
      borrowedGames:[
          
          {
              title:'Game 1',
              image:'game.jpg',
              distance:50,
              owner:'Nasir',
              ownerImage:'contact.png',
              tags:['tag'],
              type:'card game',
              minPlayers:3,
              maxPlayers:5,
              age:6,
              rating:3
          },
          {
              title:'Game 2',
              image:'game.jpg',
              distance:30,
              owner:'Ali',
              ownerImage:'contact.png',
              tags:['tag1'],
              type:'other game',
              age:5,
              minPlayers:2,
              maxPlayers:4,
              rating:2
          }
      ],
      rentedGames:[
          {
              title:'Game 3',
              image:'game.jpg',
              distance:40,
              owner:'Yacin',
              ownerImage:'contact.png',
              tags:['tag2'],
              type:'card game',
              minPlayers:4,
              maxPlayers:8,
              age:8,
              rating:4
          },
      ]
    }
  },



  getters: {
    allGames:(state)=>{
      return state.games
    },
    matchedGames:(state)=>{
      if(state.searchByName.trim() === ''){
        state.matchedGames = state.games
      } 
      if(state.sortBy === 'type'){
        state.matchedGames.sort((a, b) => {
          let fa = a.type.toLowerCase(),
          fb = b.type.toLowerCase();
          if (fa < fb) { return -1; }
          if (fa > fb) { return 1; }
          return 0;
        });
      }
      else if(state.sortBy === 'age'){
        state.matchedGames.sort((a, b) => {
          return a.age - b.age;
        });
      }
      else if(state.sortBy === 'players'){
        state.matchedGames.sort((a, b) => {
          return a.maxPlayers - b.maxPlayers;
        });
      }
      else if(state.sortBy === 'distance'){
        state.matchedGames.sort((a, b) => {
          return a.distance - b.distance;
        });
      }else{
        state.matchedGames.sort((a, b) => {
          let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
          if (fa < fb) { return -1; }
          if (fa > fb) { return 1; }
          return 0;
        });
      }
      return state.matchedGames
    }
  },
  mutations: {
    setSearchKey:(state, val)=>{
      state.searchByName = val
      state.matchedGames = state.games.filter((el)=>{
        return el.title.toLowerCase().includes(state.searchByName)
      })
    },
    setMatchedGames:(state, val)=>{
      state.matchedGames = []
      state.matchedGames.push(val)
    },
    setSelectedGame:(state, val)=>{
      state.selectedGame = val
    },
    setSortBy:(state,val)=>{
      state.sortBy = val
      if(val===''){
        state.matchedGames = state.games
      }
    }
   
  },
  actions: {
  },
  modules: {
  }
})
