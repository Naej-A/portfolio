<template>

  <div class="min-h-[125vh] bg-primary flex flex-col">
<!--    dans l'avenir j'aimerais faire une arbre avec mes compétences qui se dépli petit à petit-->
    <h1 class=" text-secondary text-8xl my-10">Mes compétences</h1>
    <img class="center" src="/carte_mentale_competence.png" alt="">
<!--    <BulleCompetence nom-image="c_logo.png" ></BulleCompetence>-->
  </div>

  <div class="min-h-screen
              bg-primary
              flex  flex-col">
    <h1 class="self-center
               text-secondary text-8xl mt-10">Mes projets</h1>
    <div class="flex
                min-h-screen
                m-16
                self-center">
      <ObjetGrilleComponent
          @click="emitChangeComponentToShowEvent(1)"
          path-img="choix_competence.png"
          class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"></ObjetGrilleComponent>
      <ObjetGrilleComponent
          @click="emitChangeComponentToShowEvent(2)"
          path-img="discord-bots-plus-joli.jpg"
          class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"></ObjetGrilleComponent>
      <ObjetGrilleComponent
          @click="emitChangeComponentToShowEvent(3)"
          class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"
      ></ObjetGrilleComponent>

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
  },
  methods:{
    emitChangeComponentToShowEvent(number){
      this.$emit("changeComponentToShowEvent", {number})
    }
  },
  emits:["changeComponentToShowEvent"],
}
</script>

<style scoped>

</style>