<template>
  <div class="h-full w-full flex flex-col bg-[#EDEEB6] items-center pb-12">
    <div
      class="w-full h-70 bg-[#D94693] text-white text-3xl p-5 bigText text-center flex items-center flex-none"
    >
      Bienvenue sur ASWAP !
    </div>
    <div class="flex flex-col items-center flex-none m-5 gap-5">
      <p class="bigText text-2xl !m-0">Qui sommes-nous?</p>
      <div
        class="rounded-xl p-5 bg-[#D4D64E] text-[#50398E] font-bold text-justify"
      >
        Nous sommes une équipe jeune, lyonnaise et dynamique.<br /><br />
        Nous encadrons et sécurisons le prêt de jeu de société entre personnes
        selon des critères définis.
      </div>
      <div class="mx-10">
        <img src="@/assets/cartes.svg" />
      </div>
    </div>

    <div class="flex flex-col items-center flex-none m-5 gap-5">
      <p class="bigText text-2xl !m-0">Le concept</p>
      <div
        class="rounded-xl p-5 bg-[#D4D64E] text-[#50398E] font-bold text-justify"
      >
        Aswap est une application mobile ou il est possible de louer et
        d’emprunter des jeux de sociétés à différents membre de la communauté
        dans une même ville.<br /><br />

        Grâce au système de localisation, vous pouvez voir en temps réel les
        personnes autour de vous qui détiennent le jeu qui vous intéresse et
        échanger avec eux.
      </div>
      <div class="mx-15">
        <img src="@/assets/dice.svg" />
      </div>
    </div>

    <div class="flex flex-col items-center flex-none m-5 gap-5">
      <p class="bigText text-2xl !m-0">Nos engagements</p>
      <div
        class="rounded-xl p-5 bg-[#D4D64E] text-[#50398E] font-bold text-justify"
      >
        Chez Aswap nous nous engageons à encadrer et sécuriser le prêt de vos
        jeux de sociétés avec un système de caution versé par l’emprunteur et
        rendu au préteur en cas de problème.<br /><br />

        Des avis et notations sur les profils des utilisateurs sont également
        présents.
      </div>
      <div class="mx-20">
        <img src="@/assets/hands.svg" />
      </div>
    </div>

    <div class="flex flex-col items-start flex-none m-5 gap-4">
      <p class="bigText text-2xl">Questions fréquentes</p>
      <p class="bigText text-xl">Généralités</p>

      <v-expansion-panels flat>
        <v-expansion-panel
          class="rounded-xl mb-4 bg-[#D4D64E]"
          v-for="question of questionsGeneral"
          v-bind:key="question.header"
        >
          <v-expansion-panel-header
            class="font-bold text-[#50398E]"
            @click="question.open = !question.open"
            v-bind:class="{
              'rounded-xl': !question.open,
              ' rounded-t-xl': question.open,
            }"
            color="#D4D64E"
            >{{ question.header }}</v-expansion-panel-header
          >
          <v-expansion-panel-content color="#D4D64E" class="rounded-b-xl">
            <div v-html="question.content"></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <p class="bigText text-xl">Paiements</p>
      <v-expansion-panels flat>
        <v-expansion-panel
          class="rounded-xl mb-4 bg-[#D4D64E]"
          v-for="question of questionsPaiement"
          v-bind:key="question.header"
        >
          <v-expansion-panel-header
            class="font-bold text-[#50398E]"
            @click="question.open = !question.open"
            v-bind:class="{
              'rounded-xl': !question.open,
              ' rounded-t-xl': question.open,
            }"
            color="#D4D64E"
            >{{ question.header }}</v-expansion-panel-header
          >
          <v-expansion-panel-content color="#D4D64E" class="rounded-b-xl">
            <div v-html="question.content"></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <p class="bigText text-xl">Litiges</p>
      <v-expansion-panels flat>
        <v-expansion-panel
          class="rounded-xl mb-4 bg-[#D4D64E]"
          v-for="question of questionsLitiges"
          v-bind:key="question.header"
        >
          <v-expansion-panel-header
            class="font-bold text-[#50398E]"
            @click="question.open = !question.open"
            v-bind:class="{
              'rounded-xl': !question.open,
              ' rounded-t-xl': question.open,
            }"
            color="#D4D64E"
            >{{ question.header }}</v-expansion-panel-header
          >
          <v-expansion-panel-content color="#D4D64E" class="rounded-b-xl">
            <div v-html="question.content"></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <p class="bigText text-xl">Location des jeux</p>
      <v-expansion-panels flat>
        <v-expansion-panel
          class="rounded-xl mb-4 bg-[#D4D64E]"
          v-for="question of questionsLocation"
          v-bind:key="question.header"
        >
          <v-expansion-panel-header
            class="font-bold text-[#50398E]"
            @click="question.open = !question.open"
            v-bind:class="{
              'rounded-xl': !question.open,
              ' rounded-t-xl': question.open,
            }"
            color="#D4D64E"
            >{{ question.header }}</v-expansion-panel-header
          >
          <v-expansion-panel-content color="#D4D64E" class="rounded-b-xl">
            <div v-html="question.content"></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "../FooterComp.vue";

export default {
  components: {
    FooterComp,
  },
  data: () => ({
    questionsGeneral: [
      {
        header: "Aswap qu’est-ce que c’est ?",
        content: `Aswap est une plateforme pour mettre en relation les propriétaires de Jeux de société avec ceux qui souhaitent prêter et louer des jeux de société. Mais aussi de profiter de ceux des autres. <br/><br/>
          Cela vous permet de rencontrer d'autres joueurs de votre région et de découvrir de nouveaux plaisirs de jeu avec une réservation facile est rapide via notre application.`,
        open: false,
      },
      {
        header: "Pourquoi vous devrez choisir Aswap ?",
        content: `
        <div>Côté propriétaire, vous devriez louer votre jeu chez Aswap car : <br/></br> <ol>
          <li>Vous bénéficiez d'un tiers de confiance qui vérifie les dossiers et peut trancher en cas de litige.</li>
          <li> Votre jeu est couvert par dépôt de garantie, alors ne vous inquiétez pas ! </li>
          <li>Vous participez à la croissance d'une belle communauté autour des jeux de société !</li></ol><br/>
           Du côté des locataires, il y a aussi des avantages sur Aswap <br/><br/>
           <ol> <li>Les prêts sont encadrés et vérifiés, pas d'arnaques !</li>
          <li>Vous êtes guidé dans votre choix de jeu grâce aux suggestions en fonctions de critères précis</li>
          <li>Vous pourrez ainsi rencontrer d'autres joueurs près de chez vous, grâce aux suggestions de l'App</li></ol></div>
        `,
        open: false,
      },
    ],
    questionsPaiement: [
      {
        header: "Quand suis-je débité ?",
        content: `Vous serez débité à la validation de votre commande puis automatiquement chaque mois/ deux semaine / XXXX à la date anniversaire de votre commande.`,
        open: false,
      },
      {
        header: "Quelles méthodes de paiements sont disponibles ?",
        content: `Vous serez débité à la validation de votre commande puis automatiquement chaque mois/ deux semaines / XXXX à la date anniversaire de votre commande.`,
        open: false,
      },
    ],
    questionsLitiges: [
      {
        header:
          "Que dois-je faire si le locataire ne se présente pas au point de rendez-vous ?",
        content: `Si le Locataire ne se présente pas au premier rendez-vous de remise du jeu,
        merci de signaler un incident à notre service à l'adresse mail <span class='text-pink-500'>contact@aswap.fr</span> dans les 24h. <br/> <br/>
      En cas de force majeure, le montant de la location sera crédité sur votre compte et la location sera réputée résiliée. Si le locataire ne se présente pas lorsque le jeu doit être rendu, nous confirmerons la raison et contacterons le locataire pour reprogrammer. Peut-être qu'il a juste oublié. En tout état de cause, il pourra être partiellement déduit de la caution du fait du retard et sera débité de l'intégralité du montant s'il ne rend pas le jeu.`,
        open: false,
      },
      {
        header:
          "Que faire si le propriétaire ne se présente pas au point de rendez-vous ?",
        content: `Si le propriétaire ne se présente pas au premier rendez-vous de livraison du jeu, merci de signaler l'incident à notre service à l'adresse <span class='text-pink-500'>contact@aswap.fr</span> dans les 24h. Vous recevrez un remboursement complet. Si le propriétaire ne se présente pas lorsque le jeu doit être rendu, nous contacterons le propriétaire pour savoir pourquoi et reprogrammer.
        <br/> <br/>
      Peut-être qu'il a juste oublié, mais d'un coté, vous pouvez toujours profiter de son jeu ! N'hésitez pas à signaler un mauvais comportement avec un Bad Rating.`,
        open: false,
      },
      {
        header:
          "Puis-je refuser de louer un jeu s'il ne correspond pas à l’annonce ?",
        content: `Bien Sûr ! Si le jeu n'est pas à la hauteur de l'annonce, vous pouvez refuser le prêt. Vous devez envoyer un mail à <span class='text-pink-500'>contact@aswap.fr</span> dans les 24h pour pouvoir annuler votre prêt sans frais.
        <br/><br/>
        Cependant, si vous décidez de le louer tel quel, pensez à signaler tout conflit d'annonces en écrivant un mail`,
        open: false,
      },
      {
        header: "Que dois-je faire si J’ai perdu ou abimé le jeu ?",
        content: `Pour les demandes de prêt, l'emprunteur doit signer un contrat avec les conditions générales de aswap et celles du propriétaire les. Il indique clairement ce qui doit être fait dans ce cas. Cela signifie que vous devez fournir de manière responsable une solution pour réparer/remplacer tout ou partie de votre jeu.`,
        open: false,
      },
    ],
    questionsLocation: [
      {
        header: "Comment fonctionne la location ?",
        content: `Une fois que vous avez trouvé un jeu qui vous plaît, demandez une location au propriétaire et sélectionnez les dates souhaitées. Pensez à personnaliser votre message et à indiquer au propriétaire l'heure et un lieu où le jeu peut être récupéré. Si le propriétaire accepte votre demande et que vous êtes tous les deux d'accord sur le lieu et l'heure de livraison du jeu, vous pouvez payer le dépôt de garantie via l'application ou bien recevoir le jeu à domicile par notre service de livraison XXXX. Ne vous inquiétez pas, votre paiement est sécurisé.
<br/> <br/>
Lors du rendez-vous, vérifiez les conditions et le contenu du jeu, afin qu'il corresponde à l'annonce. Vous n'en profitez que pendant la période de location ! A la fin de la période de location, il devra malheureusement être remis à son propriétaire.`,
        open: false,
      },
      {
        header: "Quels types de jeux sont disponibles ?",
        content: `Vous retrouverez un large choix de jeux, pour tous les âges, tous les goûts et tous les niveaux d'expertise proposés par la communauté.
`,
        open: false,
      },
      {
        header: "Combien de temps dure un prêt ?",
        content: `Vous avez le droit de garder les jeux 1 Semaine /1 mois / xxxxx. Cela va dépendre de la durée définie avec le loueur lors du prêt.`,
        open: false,
      },
      {
        header:
          "Je souhaite louer un jeu pour plus d'une semaine, est-ce possible?",
        content: `Il est possible de reconduire un prêt qui s'est bien déroulé entre 2 personnes.`,
        open: false,
      },
    ],
  }),
};
</script>

<style>
.bigText {
  font-family: "Bowlby One SC";
  color: #50398e;
}
</style>
