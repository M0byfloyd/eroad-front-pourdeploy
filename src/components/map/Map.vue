<template>
  <div style="height:95vh; width:65vw">
    <l-map :use-global-leaflet="false" ref="map" :zoom="12" :center="userStore.userPosition">
      <UserMarker :user-position="userStore.userPosition" />


      <div v-if="superchargers.length">
        <SuperchargerMarker v-for="(supercharger, index) in superchargers" :key="index"
          :supercharger-data="supercharger" />
      </div>

      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
        name="OpenStreetMap"></l-tile-layer>
    </l-map>
  </div>
</template>


<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { useSuperChargerStore } from "@/stores/supercharger";
import { useUserStore } from "@/stores/user";
import { onBeforeMount, ref } from 'vue';
import SuperchargerMarker from "@/components/map/SuperchargerMarker.vue";
import UserMarker from "@/components/map/UserMarker.vue";

const superchargerStore = useSuperChargerStore();
const userStore = useUserStore();
let superchargers = ref([]);

onBeforeMount(async () => {
  superchargers.value = await superchargerStore.getSuperchargers();
  userStore.getUserPosition()
});

</script>

