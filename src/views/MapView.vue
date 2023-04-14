<template>
  <div :style="{ height: '1000 px' }">
    <mapbox-map
      class="basemap"
      accessToken="pk.eyJ1Ijoic2FhZnNoYXJuaWEiLCJhIjoiY2w4NG01emM5MGhhYzN3azA3d3ZiZHBycSJ9.7aBTLUtt9t6J-fHPUknXfA"
      mapStyle="light-v10"
    >
      <MapMarker
        v-for="location in locations"
        :key="location.id"
        :geoJson="location"
      />
    </mapbox-map>
  </div>
</template>

<script lang="ts">
import MapMarker from "@/components/Map/Marker.vue";
import randomLocations from "../utils/randomLocations";
import type {ImageWithLocation} from "@/types/geoTypes"

export default {
    name: "MapContainer",
    components: { MapMarker },
    data() {
        return {
            locations: [] as ImageWithLocation[],
        };
    },
    created() {
        this.getLocations();
    },
    methods: {
        getLocations() {
            this.locations = randomLocations.getLocationsWithImages();
        },
    },

};
</script>

<style>
.basemap {
  width: 800px !important;
  height: 800px !important;
}
</style>
