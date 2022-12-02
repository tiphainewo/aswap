<template>

  <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" @load="onMapLoaded" :center="center" :zoom="zoom">
    <MglGeolocateControl position="top-right" />
    <MglMarker :coordinates="location"/>
  </MglMap>

</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker
  },

  props: ["users", "location"],


  data() {
    return {
      accessToken: "pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg",
      mapStyle: "mapbox://styles/mapbox/streets-v10",
      center: [4.835659, 45.748043],
      zoom: 13,
      usersArray: this.users,
    };
  },


  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    
  },

  methods: {
    onMapLoaded({ map }) {
      this.map = map;
      this.map.on('click', (e) => {
        this.$emit('changeLocation', e.lngLat);
      });
    },

    openProfile(id) {
      this.$router.push(`/user/${id}`);
    }
  }
};


</script>

<style>

.mapboxgl-canvas{
  border-radius: 1em;
}

</style>

