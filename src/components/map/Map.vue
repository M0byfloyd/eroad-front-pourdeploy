<template>
  <div style="height:600px; width:800px">
    <l-map :use-global-leaflet="false" ref="map" :zoom="12" :center="userPosition">
      <UserMarker :user-position="userPosition"/>


      <div v-if="superchargers.length">
        <SuperchargerMarker v-for="(supercharger, index) in superchargers" :key="index"
                            :supercharger-data="supercharger"/>
      </div>

      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>


<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";
import {useSuperChargerStore} from "@/stores/supercharger";
import {onBeforeMount, ref} from 'vue';
import SuperchargerMarker from "@/components/map/SuperchargerMarker.vue";
import UserMarker from "@/components/map/UserMarker.vue";

const superchargerStore = useSuperChargerStore();
let superchargers = ref([]);
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


onBeforeMount(async () => {
  superchargers.value = await superchargerStore.getSuperchargers();
});

</script>

