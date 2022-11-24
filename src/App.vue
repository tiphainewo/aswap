<template>
  <v-app>
    <v-main>
      <v-app-bar hide-on-scroll color="primary" class="align-start">
        <div v-on:click="goTo('home')">
          <img src="logo_colors.png" class="object-contain w-1/2" />
        </div>
      </v-app-bar>
      <router-view :users="users" :games="games" @addUser="addUser" :test="'coucou'"/>
      <FooterComp/>
      <BottomNav />
    </v-main>
  </v-app>
</template>
<script>
import Navbar from  '@/components/Navbar.vue'
import FooterComp from  '@/components/FooterComp.vue'
import BottomNav from './components/BottomNav.vue';
export default{
  components:{
    Navbar,
    FooterComp,
    BottomNav
  }

}
</script>
<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #D6E4E5;
}
*,*::before,*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
