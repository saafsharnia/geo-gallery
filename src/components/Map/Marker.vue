<template>
    <mapbox-marker :lngLat="geoJson.coordinates">
        <mapbox-popup>
            <div> I am the content of an attached Popup{{geoJson.image}}</div>
            <div>the location is {{geoJson.lat}} {{geoJson.lng}}</div>
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