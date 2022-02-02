<script setup>
import Header from "./components/header.vue";
import DescriptionProjet from "./components/Description-Projet.vue";
import VueRellax from 'vue-rellax';
</script>

<template id="app">
  <div>
    <Header class="bg-primary "></Header>

    <div class="min-h-screen flex flex-col bg-primary border-action border-4">
      <description-projet ></description-projet>
      <description-projet ></description-projet>
      <description-projet ></description-projet>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Gabriela, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
