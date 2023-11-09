<script setup lang="ts">
import Map from "@/components/map/Map.vue"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="wrapper">
    <div id="left">
      <header>
        <h1>E-Road</h1>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </header>
      <div id="content">
        <RouterView />
      </div>
    </div>

    <div id="right">
      <Map />
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  height: 100vh;
  align-items: center;
}

#left {
  flex: 1;
  padding: 1rem 0rem 1rem 1rem;
  background-color: var(--color-background);
  height: 100vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
}

#content {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}

#right {
  flex: 1;
  background-color: var(--color-background);
  padding: 1rem;
}

header {
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
