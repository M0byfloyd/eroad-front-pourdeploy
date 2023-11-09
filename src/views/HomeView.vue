<script setup lang="ts">
import { useSuperChargerStore } from "@/stores/supercharger"
import { useUserStore } from "@/stores/user"
import { watch } from "vue"
import CardSupercharger from "@/components/card/CardSupercharger.vue"

const superchargerStore = useSuperChargerStore()
const userStore = useUserStore()

watch(() => userStore.userPosition, () => {
  superchargerStore.getSuperchargerNearestUser()
})
</script>

<template>
  <main>
    <div class="list-supercharger" v-if="superchargerStore.nearest.length">
      <card-supercharger v-for="supercharger in superchargerStore.nearest" :supercharger="supercharger" :key="supercharger.id" />
    </div>
  </main>
</template>
