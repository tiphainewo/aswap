<template>

  <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" @load="onMapLoaded" :center="center" :zoom="zoom" class="map">
    <MglNavigationControl position="top-right" />
    <MglGeolocateControl position="top-right" />

    <MglMarker :coordinates="user.coordinates" color="blue" v-on:click="openProfile(user.id)" v-for="user of users"
      v-bind:key="user.id">
      <v-badge slot="marker" bordered overlap :content="user.gamesOwned" color="secondary" class="!absolute">

        <v-avatar size="50" bordered color="white" class="border-2" v-if="user.userImage">
          <v-img :src="user.userImage"></v-img>
        </v-avatar>

        <v-avatar color="secondary" v-else>
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>

      </v-badge>
    </MglMarker>
  </MglMap>

</template>

<script>
import Mapbox from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'; 
import { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker
  },

  props: ["users"],


  data() {
    return {
      accessToken: "pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg",
      mapStyle: "mapbox://styles/mapbox/streets-v10",
      coordinates: [4.829539, 45.740351],
      center: [4.835659, 45.748043],
      zoom: 13,
      usersArray: this.users
    };
  },


  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },

  methods: {
    onMapLoaded({ map }) {
      this.map = map;
    },

    openProfile(id) {
      this.$router.push(`/user/${id}`);
    }
  }
};


</script>

<style>
.map{
  border-radius: 1em !important;
}
</style>

