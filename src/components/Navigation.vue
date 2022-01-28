<template>
  <div class="navigation flex flex-col">
    <div class="flex">
      <img src="../assets/menu_icon.svg"  alt="oui">
      <p class="ml-1">Menu</p>
    </div>
    <ligneMenu class="self-start" link=""> Mes Projets </ligneMenu>
    <ligneMenu class="self-start" link=""> Mes Compétences </ligneMenu>
    <ligneMenu class="self-start" link=""> Contact </ligneMenu>
  </div>
</template>

<script>
import ligneMenu from "./Ligne-Menu.vue";
export default {
  name: "Navigation",
  components: {
    ligneMenu
  }

}
</script>

<style scoped>

.navigation{
  background: #363732;
}

p {
  color: #F7F7FF;
}

</style>