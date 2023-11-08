<script setup lang="ts">
import {LMarker} from "@vue-leaflet/vue-leaflet";

defineProps({
  latLng: Array
});
</script>

<template>
  <l-marker :lat-lng=latLng></l-marker>
</template>
