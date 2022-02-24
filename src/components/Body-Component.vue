<template>

<!--  <div class="min-h-[125vh] bg-primary">-->
<!--&lt;!&ndash;    dans l'avenir j'aimerais faire une arbre avec mes compétences qui se dépli petit à petit&ndash;&gt;-->
<!--    <h1 class=" text-secondary text-8xl">mes compétence</h1>-->
<!--&lt;!&ndash;    <BulleCompetence nom-image="c_logo.png" ></BulleCompetence>&ndash;&gt;-->
<!--  </div>-->

  <div class="min-h-screen
              bg-primary
              flex  flex-col">
    <h1 class="self-center
               text-secondary text-8xl">Mes projets</h1>
    <div class="flex
                min-h-screen
                m-16
                self-center">
      <ObjetGrilleComponent
          @click="emitChangeComponentToShowEvent(1)"
          path-img="/public/Pac-man/choix_competence.png"
          class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"></ObjetGrilleComponent>
      <ObjetGrilleComponent
          @click="emitChangeComponentToShowEvent(2)"
          class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"></ObjetGrilleComponent>
      <ObjetGrilleComponent
          @click="emitChangeComponentToShowEvent(3)"
          class=" transition-all duration-300 grow-1 ease-in w-1/3 hover:w-full"
          path-img="public/bot_discord/discord-bots-plus-joli.jpg"
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