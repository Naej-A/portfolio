<script setup>
import Header from "./components/header.vue";
import DescriptionProjet from "./components/Description-Projet.vue";
import VueRellax from 'vue-rellax';
</script>

<template id="app">
  <div>
    <Header class=""></Header>

    <div class="
                flex flex-col
                bg-primary">
      <description-projet :change-base-direction="true" ></description-projet>
      <description-projet ></description-projet>
      <description-projet ></description-projet>
    </div>

    <div class="h-5/6">
      oui
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
