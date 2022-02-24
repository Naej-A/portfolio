<template>
    <div class="bg-top relative  cursor-pointer ">
      <img class="h-full object-cover " src="/public/Pac-man/choix_competence.png" alt="">
<!--      <div class="h-full  w-full object-cover-->
<!--                  absolute top-0-->
<!--                  bg-action/90-->
<!--                  hover:bg-action/75  delay-300 hover:contents ">-->
<!--        bg-->
<!--      </div>-->

<!--      <div class="content-overlay"></div>-->
<!--      <img class="content-image" src="public/Pac-man/choix_competence.png" alt="image en background">-->
<!--      <div class="content-details fadeIn-bottom">-->
<!--        <h3 class="content-title">This is a title</h3>-->
<!--        <p class="content-text">This is a short description</p>-->
<!--      </div>-->
    </div>

</template>

<script>
export default {
  name: "Objet-Grille-Component",
  props:{
    pathImg:{
      type:String,
      default:"/public/default-image.jpg"
    }
  }
}
</script>

<style scoped>

</style>