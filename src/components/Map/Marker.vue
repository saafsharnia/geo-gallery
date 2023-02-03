<template>
    <mapbox-marker :lngLat="geoJson.geometry.coordinates">
        <mapbox-popup>
            <div> I am the content of an attached Popup</div>
        </mapbox-popup>
    </mapbox-marker>
</template>

<script lang="ts">
import type {GeoJSONType} from "@/types/geoTypes";
import type {PropType} from "vue";

export default {
    name: "MapMarker",
    props: {
        geoJson: {
            type: Object as PropType<GeoJSONType>,
            required: true
        }
    }
}
</script>

<style scoped>

</style>