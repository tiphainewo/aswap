<template>
  <div class="h-full w-full flex flex-col bg-[#EDEEB6] items-center pb-15">
    <div class="w-full h-70 bg-[#D94693] text-white text-3xl bigText text-center flex items-center flex-none">
      Bienvenue sur ASWAP !
    </div>
    <div class="flex flex-col items-center flex-none m-5">
      <p class="bigText text-2xl">
        Qui sommes-nous?
      </p>
      <div class="rounded-xl p-5 bg-[#D4D64E] text-[#50398E] font-bold text-justify">
        Nous sommes une équipe jeune, lyonnaise et dynamique.<br/><br/>
        Nous encadrons et sécurisons le prêt de jeu de société entre personnes selon des critères définis.</div>

    </div>

    <div class="flex flex-col items-center flex-none m-5">
      <p class="bigText text-2xl">
        Le concept
      </p>
      <div class="rounded-xl p-5 bg-[#D4D64E] text-[#50398E] font-bold text-justify">
        Aswap est une application mobile ou il est possible de louer et d’emprunter des jeux de sociétés à différents
        membre de la communauté dans une même ville.<br/><br/>

        Grâce au système de localisation, vous pouvez voir en temps réel les personnes autour de vous qui détiennent le
        jeu qui vous intéresse et échanger avec eux.
      </div>
    </div>

    <div class="flex flex-col items-center flex-none m-5">
      <p class="bigText text-2xl">
        Nos engagements
      </p>
      <div class="rounded-xl p-5 bg-[#D4D64E] text-[#50398E] font-bold text-justify">
        Chez Aswap nous nous engageons à encadrer et sécuriser le prêt de vos jeux de sociétés avec un système de
        caution versé par l’emprunteur et rendu au préteur en cas de problème.<br/><br/>

        Des avis et notations sur les profils des utilisateurs sont également présents.
      </div>
    </div>

    <div class="flex flex-col items-center flex-none m-5 gap-4">
      <p class="bigText text-2xl">
       Questions fréquentes
      </p>

      <v-expansion-panels
        flat
      >
        <v-expansion-panel class="rounded-xl mb-4 bg-[]" v-for="question of questions" v-bind:key="question">
          <v-expansion-panel-header class="font-bold text-[#50398E]" @click="(question.open= !question.open)" v-bind:class="{'rounded-xl': !question.open, ' rounded-t-xl' : question.open}" color="#D4D64E">{{question.header}}</v-expansion-panel-header>
          <v-expansion-panel-content color="#D4D64E" class="rounded-b-xl">
            {{question.content}}
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </div>
  </div>

</template>

<script>

export default ({
  data: () => ({
    questions: [
      { 
        header : "Quels types de jeux sont disponibles ?",
        content: "Some content",
        open: false,
      },
      { 
        header : "Combien de temps dure un prêt ?",
        content: "Some content",
        open: false,
      },
      { 
        header : "Combien de temps dure un prêt ?",
        content: "Some content",
        open: false,
      },
    ]
  }),
})
</script>

<style>
.bigText {
  font-family: 'Bowlby One SC';
  color: #50398E;
}
</style>
