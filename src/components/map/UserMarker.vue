<script setup lang="ts">

import {LIcon, LMarker} from "@vue-leaflet/vue-leaflet";
import {ref} from "vue";

let userPosition = ref([0, 0]);

function success(position) {
  console.log(position)
  userPosition.value = [position.coords.latitude, position.coords.longitude];
}

function error() {
  console.log("Sorry, no position available.");
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000
};

navigator.geolocation.watchPosition(success, error, options);

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