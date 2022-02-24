<template>
  <div v-if="loadMainPage">
    <HeaderComponent class=""></HeaderComponent>
    <BodyComponent  @changeComponentToShowEvent="changeComponentToShow($event)"></BodyComponent>
    <Footer></Footer>
  </div>

  <div class="bg-primary" v-else-if="loadProject1" id="1">
    <input class="bg-primary cursor-pointer rounded-2xl border-secondary hover:border-action bg-secondary text-primary border-4 my-10 w-52 text-secondary" value="click me to go to main page " @click="loadMainPage = true; loadProject1 = false ">
    <DescriptionProjetMaintenance class=""></DescriptionProjetMaintenance>
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
import DescriptionProjetMaintenance from "./components/Description-Projet-Maintenance.vue";

export default {
  name: "Main",
  components:{
    HeaderComponent,
    BodyComponent,
    Footer,
    DescriptionProjetMaintenance
  },
  data : () => {
    return{
      loadMainPage : true,
      loadProject1 : false,
      loadProject2 : false,
      loadProject3 : false,
    }
  },
  methods:{
    changeComponentToShow(event){
      this.loadMainPage = false
      if (event.number === 1){
        this.loadProject1 = true
      }
      else if (event.number === 2){
        this.loadProject2 = true
      }
      else if (event.number === 3){
        this.loadProject3 = true
      }
    }
  }
}
</script>

<style scoped>

</style>