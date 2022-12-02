<template>

  <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" @load="onMapLoaded" :center="center" :zoom="zoom">
    <MglGeolocateControl position="top-right" />
    <MglMarker :coordinates="coordinates"/>
  </MglMap>

</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglGeolocateControl, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglGeolocateControl,
    MglMarker
  },

  props: ["users", "location"],


  data() {
    return {
      accessToken: "pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg",
      mapStyle: "mapbox://styles/mapbox/streets-v10",
      center: [this.location.lng, this.location.lat],
      zoom: 13,
      usersArray: this.users,
    };
  },

  computed: {
    coordinates(){
      let coords=[]
      if (Array.isArray(this.location)) return this.location;
      else {
        coords.push(this.location.lng);
        coords.push(this.location.lat);
      }
      return coords
    }
  },


  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    
  },

  methods: {
    onMapLoaded({ map }) {
      this.map = map;
    },
  }
};


</script>

<style>

.mapboxgl-canvas{
  border-radius: 1em;
}

</style>

