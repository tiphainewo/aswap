<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v10",
      center: [4.835659, 45.764043],
      zoom: 15,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    new mapboxgl.Marker().setLngLat([4.872709, 45.740853]).addTo(map);

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    map.addControl(geolocate, "top-right");
  },
};
</script>

<style lang="scss" scoped>
.basemap {
  width: 100%;
  height: 100%;
}
</style>
