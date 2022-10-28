<template>
<div :style="{height: '1000 px'}">
    <mapbox-map
        class="basemap"
        accessToken="pk.eyJ1Ijoic2FhZnNoYXJuaWEiLCJhIjoiY2w4NG01emM5MGhhYzN3azA3d3ZiZHBycSJ9.7aBTLUtt9t6J-fHPUknXfA"
        mapStyle="light-v10"

    />
</div>

</template>

<script>
export default {
  name: "Map"
}
</script>

<style>

.basemap {
    width: 800px !important;
    height: 800px !important;
}

</style>