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
    <h3>{{ supercharger?.nomStation }}</h3>
    <p>{{ supercharger?.adresseStation }}</p>
    <p>{{ supercharger?.tarification}}</p>
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
h3 {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}
p {
  font-size: 0.9rem;
  margin: 0;
}
</style>