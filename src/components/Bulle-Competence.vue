<template>
<!--  animate__animated animate__fadeInUp -->
<!--  bg-myGreen  h-36  w-36 drop-shadow-4xl shadow-black border-4 border-secondary rounded-2xl flex justify-center  hover:scale-125 transition-->
  <div :class="classAvecTailleBoite">
    <div :class="classAvecTailleLogo">
      <img class="object-cover  rounded-xl h-full" :src="pathLogo" alt="image logo">
    </div>

  </div>

</template>

<script>
export default {
  name: "BulleCompetence",
  props:{
    nomImage:{
      type:String,
      default:"defaultImage_logo.jpg"
    },
    importance:{
      type:Number,
      default:2
    }
  },
  computed:{
    pathLogo: function () {
      // `this` points to the vm instance
      return "public/logo_competence/"+this.nomImage
    },
    classAvecTailleBoite: function () {
      let taille = this.importance/4  + 5 ;
      let textTaille = taille.toString();
      console.log(taille)
      console.log(textTaille)
      return " bg-myGreen drop-shadow-4xl shadow-black border-4 border-secondary rounded-2xl flex justify-center  hover:scale-125 transition " +
              " h-["+ textTaille + "rem]" +
              " w-["+ textTaille + "rem]"
    },
    classAvecTailleLogo: function () {
      let taille = this.importance/4  + 3 ;
      let textTaille = taille.toString();
      console.log(taille)
      console.log(textTaille)
      return " self-center flex hover:shadow-2xl " +
          " h-["+ textTaille + "rem]" +
          " w-["+ textTaille + "rem]"
    }
  }
}

</script>

<style scoped>

</style>