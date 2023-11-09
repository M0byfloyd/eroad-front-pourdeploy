<script setup lang="ts">
import { onMounted, defineProps } from 'vue';
import type { Supercharger } from '@/stores/types';

const props = defineProps({
  supercharger: Object as () => Supercharger
})

onMounted(() => {
  console.log(props.supercharger)
})

</script>

<template>
  <div class="card-supercharger">
    <div class="header">
      <img src="/src/assets/pinktesla.png" alt="pink tesla logo">
      <h2>{{ supercharger?.nomEnseigne }}</h2>
    </div>
    <p>{{ supercharger?.nomStation }}</p>
    <p>{{ supercharger?.adresseStation }}</p>
    <p>{{ supercharger?.tarification}} km</p>
  </div>
</template>

<style scoped>
.card-supercharger {
  width: 100%;
  padding: 1rem;
}
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
img {
  width: 25px;
}
h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
}
p {
  font-size: 1rem;
  margin: 0;
}
</style>