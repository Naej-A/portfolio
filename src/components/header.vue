<template>
  <div class="flex flex-col min-h-screen">
    <Navigation class="ml-5 mt-5"></Navigation>
    <div class="grow w-1 text-6xl flex flex-col w-full justify-center">
<!--      block avec mes informations     -->
      <div class="w-2/3 text-secondary self-center ">
        <p class="text-8xl">Antoine JEAN</p>
        <p class=" px-4 text-secondary/25 inline-block">Developpeur</p>
        <p class=" px-4 text-secondary/60 inline-block">Full stack</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueRellax from "vue-rellax";


import Navigation from "./Navigation.vue";
export default {
  name: "header",
  components:{
    Navigation
  }
}
</script>

<style scoped>

</style>