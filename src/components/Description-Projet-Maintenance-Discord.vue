<template>

  <div id="projetDiscord" class="flex flex-col w-full min-h-screen items-center justify-evenly bg-primary  text-secondary mb-16">

    <div  class="w-4/5 mt-8 text-justify">
      <div class="text-6xl text-center">
        Description du projet   Discord JS
      </div>
      <div class="mt-8">

        <p>
          Ce projet personnel a été fait lors de ma deuxième année de DUT (Diplôme universitaire de technologie) informatique.
          Un Bot (robot) a été créé dans le but d'améliorer la communication au sein d'un groupe dans lequel j'avais un rôle d'organisateur.
        </p><br>

        <p>
          Contexte</p>
        <p>Lors d'un projet tuteuré nous avons appliqué une méthode agile que nous avions apprise au cours de notre formation.
          Ce projet de groupe étant à réaliser sur plusieurs mois (en plus des cours) nous avons choisi de faire une mélée quotidienne
          (outil d'une méthode agile ayant pour objectif de permettre à l’équipe de se synchroniser et d’ajuster ses actions jusqu'à la prochaine mêlée) tous les trois jours.
          Nous avions des difficultés à se réunir exactement tous les trois jours.


        </p><br>
        <p>
          Afin de remédier à cela, j'ai créé un bot sur le logiciel de communication Discord afin de rappeller à tous les membres du groupe de faire leur mêlée quotidienne.
        </p>
        <br>


        <div>
          Récapitulatif
          <ul class="list-disc pl-8">
            <li>J'ai appris à utiliser la librairie DiscordJS</li>
            <li>J'ai mis en en production le bot et je l'ai maintenu durant toute la durée du projet</li>
            <li>J'ai fait la fonctionnalité permettant de rappeler à mon groupe de faire la mêlée quotidienne </li>
          </ul>
        </div>




      </div>
    </div>

    <div class="flex sm:flex-col justify-evenly mt-16 items-center w-4/5">
      <div class="text-justify m-6 flex flex-col">
        <div class="text-5xl text-center ">
          Maintenance du projet
        </div>

        <div class="mt-8">
          Le but de la maintenance est de rajouter des fonctionnalités au bot.
        </div>

        <div class="mt-6">
          J'ai choisi d'ajouter
          <ul class="list-disc pl-8">
            <li>Une commande pour savoir qui a envoyé la commande et sur quel serveur</li>
            <li>Des arguments à la fonction de la mêlée quoitidienne permettant de choisir le nombre de répétition et le temps entre deux répétitions</li>
            <li>Une fonctionnalités permettant au bot de savoir sur quelle touche de son clavier l'utilisateur a appuyé en dernier</li>
          </ul>

        </div>


        <div class="mt-6">
          Le dernier ajout permet d'élargir ce qu'il est possible de faire avec un bot.
          En effet, on pourrait faire des macros personnalisées, choisir la musique dans une playlist sans avoir à utiliser des commandes
          ou encore jouer à des jeux directement dans discord.
          Par exemple, un bot pourrait lancer une partie de pong (le jeu vidéo), le jeu s'afficherait dans le chat via le message du bot, et deux utilisateurs pourraient jouer en simultané.

          <div class="flex text-center content-center justify-around mt-8">
            <div>
              Comment ça marche ?
              <img class="h-76 self-center " src="/public/bot_discord/explication_fonctionnement.png" alt="">
              <div class="text-left w-4/5">
                <p>
                  1 - Mon plugin enregistre les touches tapées par l'utilisateur et les envoie au serveur.
                </p>
                <p>
                  2 - Le serveur reçoit les informations et les transmet au bot
                </p>
                <p>
                  3 - Le bot reçoit l'information et peut l'utiliser et l'écrire sur le serveur si nécessaire
                </p>
              </div>

            </div>
            <div class="">
              Preuve de fonctionnement
              <iframe width="560" height="315" src="https://www.youtube.com/embed/NpayWBgwuGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              ici nous pouvons voir les différentes étapes s'effectuer
            </div>
          </div>

        </div>


        <div class="my-20 flex flex-col ">
          <div class=" self-center scale-150 ">
            <a class="  rounded-lg transition delay-100 hover:scale-125 hover:bg-primary/90" href="https://github.com/antolefou/Bot_discord" target="_blank" >
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

          <p class="self-center mt-4"> Lien vers le repo git </p>

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
          <p class="font-bold text-xl"> Mettre en place l'envoi des touches</p>
          <br>
          <p class="italic underline underline-offset-2"><a href="https://betterdiscord.app/">Better Discord</a></p>
          <p>Logiciel qui améliore l'éxpérience utilisateur de Discord.
            Ce logiciel permet d'installer des plugins facilement et dispose d'une grosse quantité de documentation.</p>
          <br>
          <p class="italic underline underline-offset-2"><a href="https://powercord.dev/">Powercord</a> </p>
          <p>Similaire à Better Discord mais Powercord est plus léger. Le mauvais côté de cette technologie est sa nouvauté. En effet, il est plus dur de trouver de la documentation</p>
          <br>
          <p> J'ai donc choisi d'utiliser Better Discord pour sa documentation et sa facilité à ajouter un plugin </p>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>



  <Footer ></Footer>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "Description-Projet-Maintenance-Discord",
  components:{
    Footer,
  }
}
</script>



<style scoped>

</style>