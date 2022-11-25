<template>
  <div :style="{ height: '1000 px' }">
    <mapbox-map
      class="basemap"
      accessToken="pk.eyJ1Ijoic2FhZnNoYXJuaWEiLCJhIjoiY2w4NG01emM5MGhhYzN3azA3d3ZiZHBycSJ9.7aBTLUtt9t6J-fHPUknXfA"
      mapStyle="light-v10"
    >
      <MapMarker
        v-for="geoJson in geoJsons"
        :key="geoJson.id"
        :geoJson="geoJson"
      />
    </mapbox-map>
  </div>
</template>

<script>
import MapMarker from "../components/Map/Marker.vue";
export default {
  name: "MapContainer",
  components: { MapMarker },
  data() {
    return {
      geoJsons: [
        {
          id: 1,
          type: "Feature",
          name: "Germany",
          geometry: {
            type: "Point",
            coordinates: [10, 50],
          },
        },
        {
          id: 2,
          type: "Feature",
          name: "Croatia",
          geometry: {
            type: "Point",
            coordinates: [15, 45],
          },
        },
      ],
    };
  },
};
</script>

<style>
.basemap {
  width: 800px !important;
  height: 800px !important;
}
</style>
