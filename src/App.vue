<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <FooterComp/>
  </div>
</template>
<script>
import Navbar from  '@/components/Navbar.vue'
import FooterComp from  '@/components/FooterComp.vue'
export default{
  components:{
    Navbar,
    FooterComp
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
