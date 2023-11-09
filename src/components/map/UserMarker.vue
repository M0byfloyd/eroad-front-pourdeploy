<script setup lang="ts">
import { LIcon, LMarker } from "@vue-leaflet/vue-leaflet";

defineProps({
  userPosition: Array
})

</script>

<template>
  <l-marker :lat-lng="userPosition">
    <l-icon icon-url="/src/assets/bg.png" :icon-size="[32, 37]">
    </l-icon>
  </l-marker>
</template>