<template>

  <MglMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    @load="onMapLoaded"
    :center="center"
    :zoom="zoom"
  >
  <MglNavigationControl position="top-right"/>
    <MglGeolocateControl position="top-right" />
    <MglMarker :coordinates="coordinates" color="blue" >
      <!-- <v-icon slot="marker">mdi-map-marker</v-icon> -->
      <MglPopup>
        <VCard>
          <div>Hello, I'm popup!</div>
        </VCard>
      </MglPopup>
    </MglMarker>
    </MglMap>

</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker, MglPopup } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker,
    MglPopup
  },
  data() {
    return {
      accessToken: "pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg",
      mapStyle: "mapbox://styles/mapbox/streets-v10",
      coordinates: [4.829539, 45.740351],
      center: [4.835659, 45.748043],
      zoom: 13,
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },

  methods: {
    onMapLoaded(event) {
      // in component
      this.map = event.map;
      // or just to store if you want have access from other components
      this.$store.map = event.map;
    }
  }
};
</script>

