<script setup lang="ts">
import { LIcon, LMarker } from "@vue-leaflet/vue-leaflet";

// à typer
const props = defineProps({
  latLng: Array,
  superchargerData: Object
});

</script>

<template>
  <l-marker :lat-lng="props.superchargerData?.coordonneesXY.split(' , ')">
    <l-icon icon-url="/src/assets/pinktesla.png" :icon-size="[40, 40]">
    </l-icon>
  </l-marker>
</template>
