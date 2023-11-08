<template>
  <div style="height:600px; width:800px">
    <l-map :use-global-leaflet="false" ref="map" v-model:zoom="zoom" :center="[48.1814236,1.3028886]">
      <Marker :lat-lng="[48.1814236,1.3028886]" />
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";
import Marker from "@/components/map/Marker.vue";

export default {
  components: {
    Marker,
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 14,
    };
  },
};
</script>