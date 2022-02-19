<script setup>
import HeaderComponent from "./components/Header-Component.vue";
import DescriptionProjet from "./components/Description-Projet.vue";
import Footer from "./components/Footer.vue";
import BodyComponent from "./components/Body-Component.vue";
import BulleCompetence from  "./components/Bulle-Competence.vue";

import VueRellax from 'vue-rellax';

</script>


<template id="app">

  <div>
    <HeaderComponent class=""></HeaderComponent>

    <BodyComponent></BodyComponent>



<!--    <div class="-->
<!--                flex flex-col-->
<!--                bg-primary">-->
<!--      <description-projet :change-base-direction="true" ></description-projet>-->
<!--      <description-projet ></description-projet>-->
<!--      <description-projet ></description-projet>-->
<!--    </div>-->

    <Footer></Footer>

  </div>
</template>

<style>
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

#app {
  font-family: Gabriela, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
