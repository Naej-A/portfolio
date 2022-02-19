<template>

  <div class="min-h-screen bg-primary">
<!--    <BulleCompetence nom-image="c_logo.png" ></BulleCompetence>-->
  </div>

  <div class="min-h-screen
              bg-primary
              flex  flex-col">
    <h1 class="self-center
               text-secondary text-8xl">Mes projets</h1>
    <div class="flex
                min-h-screen
                m-16
                self-center">
      <ObjetGrilleComponent class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"></ObjetGrilleComponent>
      <ObjetGrilleComponent class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"></ObjetGrilleComponent>
      <ObjetGrilleComponent class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"></ObjetGrilleComponent>
    </div>
  </div>


</template>

<script>
import DescriptionProjet from "./Description-Projet.vue"
import ObjetGrilleComponent from "./Objet-Grille-Component.vue"
import BulleCompetence from  "./Bulle-Competence.vue";

export default {
  name: "Body-Component",
  components:{
    DescriptionProjet,
    ObjetGrilleComponent,
    BulleCompetence
  }
}
</script>

<style scoped>

</style>