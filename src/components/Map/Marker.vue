<template>
    <mapbox-marker :lngLat="geoJson.coordinates">
        <mapbox-popup>
            <img :src="geoJson.image" :alt="`[${geoJson.lat},${geoJson.lng}]`">
        </mapbox-popup>
    </mapbox-marker>
</template>

<script lang="ts">
import type {ImageWithLocation} from "@/types/geoTypes";
import type {PropType} from "vue";

export default {
    name: "MapMarker",
    props: {
        geoJson: {
            type: Object as PropType<ImageWithLocation>,
            required: true
        }
    },
}
</script>

<style scoped>

</style>