<template>
  <div v-if="loadMainPage" @changeItemToOrderEvent="change($event)">
    <HeaderComponent class=""></HeaderComponent>
    <BodyComponent></BodyComponent>
    <Footer></Footer>
  </div>

  <div v-else-if="loadProject1" id="1">
    <p>projet 1</p>
    <input class="bg-primary text-secondary" value="click me to go to main page" @click="loadMainPage = true; loadProject1 = false ">
  </div>

  <div v-else-if="loadProject2" id="2">
    <p>projet 2</p>
    <input class="bg-primary text-secondary" value="click me to go to main page" @click="loadMainPage = true; loadProject1 = false ">

  </div>

  <div v-else-if="loadProject3" id="3">
    <p>projet 3</p>
    <input class="bg-primary text-secondary" value="click me to go to main page" @click="loadMainPage = true; loadProject1 = false ">
  </div>
</template>

<script>
import HeaderComponent from "./components/Header-Component.vue";
import DescriptionProjet from "./components/Description-Projet.vue";
import Footer from "./components/Footer.vue";
import BodyComponent from "./components/Body-Component.vue";
import BulleCompetence from  "./components/Bulle-Competence.vue";

export default {
  name: "Main",
  components:{
    HeaderComponent,
    BodyComponent,
    Footer
  },
  data : () => {
    return{
      loadMainPage : false,
      loadProject1 : true,
      loadProject2 : false,
      loadProject3 : false,
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>