<template>

  <div class="flex flex-col w-full min-h-screen items-center justify-evenly bg-primary  text-secondary mb-16">

    <div class="w-4/5 mt-8 text-justify">
      <div class="text-6xl text-center">
        Description du projet
      </div>
      <div class="mt-8">

        <p>
          Ce projet a été fait lors de ma première année de DUT (Diplôme universitaire de technologie) informatique.
          Ce jeu est inspiré du jeu Pac-Man.
        </p><br>

        <p>
          But du jeu : Pac-Man doit manger tous les Pac-Gommes et bonus présents dans un labyrinthe.
          Chacun des ces éléments augmentent les points du joueur, le but final étant de faire le plus gros score possible.
          Si Pacman touche ou est touché par un fantôme, il perd une vie.
        </p><br>

        <p>
          Une des contrainte du cahier des charges était d'apporter une originalité par rapport au jeu de base.
        </p><br>

        <div>
          Nous avons mis en place les originalités suivantes :
          <ul class="list-disc pl-8">
            <li>Une génération de labyrinthe aléatoire</li>
            <li>Des intelligences artificielles différentes pour chacun des fantômes </li>
            <li>Un système de compétences, dans lequel le joueur peut acheter et améliorer différentes compétences en payant grâce aux points récoltés au cours des différentes parties  </li>
            <li>Des contreparties d'utilisations suite à l'activation des compétences, qui peuvent aller de la perte de points au ralentissement de Pac-Man </li>
          </ul>
          <br>
        </div>




      </div>
    </div>

    <div class="flex sm:flex-col justify-evenly mt-16 items-center w-4/5">
      <div class="text-justify m-6 flex flex-col">
        <div class="text-5xl text-center ">
          Maintenance du projet
        </div>

        <div class="mt-8">
          Le but de la maintenance est de publier ce jeux vidéo, réalisé en groupe, sur une platforme afin que tout le monde puisse
          le télécharger.

          Comme le projet a été réalisé avec le framework JavaFX, il fallait respecter des règles d'architectures spécifiques et donc changer celles du projet original.
        </div>

        <div class="mt-6">
          En effet, notre projet suivait les règles d'organisation MVC (Modèle Vue Controller).
          Tandis que JavaFX fonctionne avec une organisation code | ressources.
          J'ai dû refactoriser l'entièreté du projet.

          <div class="flex text-center  justify-around mt-8">
            <div class="">
              Architecture avant la refactorisation
              <img class="h-96 self-center" src="public/Pac-man/archi_avant_refractor.png" alt="">
            </div>
            <div>
              Architecture après la refactorisation
              <img class="h-96 self-center" src="public/Pac-man/archi_apres_refractor.png" alt="">
            </div>
          </div>

        </div>

        <div class="my-20 self-center ">
          <iframe class="self-end rounded-2xl shadow-lg scale-125  " src="https://itch.io/embed/1414591" height="167" width="552"> <a href="https://nosforice.itch.io/supa-vax-man">SUPA VAX-MAN by nosforice</a> </iframe>
          <div class="text-center mt-8">
            <p> Une fois l'exécutable mis en place, j'ai publié ce jeu sur Itch.io.</p>
          </div>
        </div>

        <div class="my-20 flex flex-col ">
          <div class=" self-center scale-150 ">
            <a class="  rounded-lg transition delay-100 hover:scale-125 hover:bg-primary/90" href="https://github.com/antolefou/Pac-Man-PjTut" target="_blank" >
              <svg class="stroke-black transition delay-50  hover:scale-120   fill-action" width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_34_10)">
                  <path d="M16.2456 22.478V18.608C16.2831 18.1311 16.2187 17.6518 16.0566 17.2018C15.8945 16.7517 15.6385 16.3414 15.3056 15.998C18.4456 15.648 21.7456 14.458 21.7456 8.99797C21.7453 7.60179 21.2083 6.25916 20.2456 5.24796C20.7015 4.02647 20.6692 2.67631 20.1556 1.47796C20.1556 1.47796 18.9756 1.12796 16.2456 2.95797C13.9536 2.33679 11.5376 2.33679 9.24561 2.95797C6.51561 1.12796 5.33561 1.47796 5.33561 1.47796C4.82198 2.67631 4.78975 4.02647 5.24561 5.24796C4.27573 6.26666 3.73813 7.62143 3.74561 9.02797C3.74561 14.448 7.0456 15.638 10.1856 16.028C9.8566 16.3679 9.60287 16.7734 9.44091 17.2179C9.27896 17.6624 9.21241 18.136 9.24561 18.608V22.478M9.24561 19.478C4.24561 20.978 4.24561 16.978 2.24561 16.478L9.24561 19.478Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_34_10">
                    <rect width="24" height="24" fill="white" transform="translate(0.245605 0.478027)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>

          <p class="self-center mt-4"> Liens vers le repo git </p>

        </div>


      </div>

      <div class="mx-4">
        <div class="text-5xl text-center">
          Veille technologique
        </div>
        <div class="text-justify">
          <br>
          <h2 class="text-2xl font-bold">Différentes technologies possibles</h2>
          <br>
          <p class="font-bold text-xl"> Mettre en place un exécutable</p>
          <br>
          <p class="italic">Maven</p>
          <p>Système de gestion de fichiers, de plugins qui peut être utiliser afin de faire un .jar avec un projet en JavaFX</p>
          <br>
          <p class="italic"> Gradle </p>
          <p>Similaire à Maven mais Gradle ne possède pas le plugin permettant de faire un .jar avec JavaFX en raison du packet qui permet de faire cela qui n'est plus supporté depuis Java8 et JavaFX11</p>
          <br>
          <p class="italic"> Suite JetBrains</p>
          <p>Permet de faire .jar directement avec son IDE. Toutefois, même problème que Gradle</p>
          <br>
          <p> J'ai donc choisi d'utiliser Maven. </p>
          <br>
          <br>
          <p class="text-xl font-bold">Plateformes de distribution</p>
          <br>
          <p><i>Steam GreenLight</i></p>
          <p> Plateforme permettant aux utilisateurs de Steam de décider quel jeu peut être ajouter à Steam.
            Il faudrait avoir un certain nombre de personnes ajoutant le jeu dans leur liste de souhaite,
            mais dans notre contexte, cela ne serait pas possible par un manque de temps ainsi qu'à cause du jeu proposé. </p>
          <br>
          <p><i>Epic games</i></p>
          <p> Similaire à Steam, toutefois, il faut être directement en contact avec la société si nous voulons publier un jeu. </p>
          <br>
          <p><i>Itch.io</i></p>
          <p> Plateforme permettant à des créateurs de jeu indépendants d'héberger, de distribuer ainsi que de vendre leurs jeux. Elle offre une grande facilité d'accès, en effet, n'importe qui peut publier son jeu, toutefois, la taille limite de celui-ci est d'1 Go</p>
        </div>
      </div>
    </div>
  </div>



  <Footer ></Footer>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "Description-Projet-Maintenance",
  components:{
    Footer,
  }
}
</script>



<style scoped>

</style>