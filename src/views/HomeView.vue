<script setup lang="ts">
import Map from "@/components/map/Map.vue";
import { useSuperChargerStore } from "@/stores/supercharger";
import { useUserStore } from "@/stores/user";
import { watch } from "vue";

const superchargerStore = useSuperChargerStore();
const userStore = useUserStore();

watch(() => userStore.userPosition, () => {
  superchargerStore.getSuperchargerNearestUser();
  console.log(superchargerStore.nearest)
})

</script>

<template>
  <main>
    <Map/>
  </main>
</template>
