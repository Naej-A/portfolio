<template>
  <div class="flex flex-col min-h-screen">
    <Navigation class="ml-5 mt-5"></Navigation>
    <div class="grow items-center self-center">
      <p class="text-6xl "> Antoine JEAN developper full stack </p>
    </div>
  </div>
</template>

<script>
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