<template>
    <div class="w-full">
        <p class="text-gray-400 text-center">Vous avez fait une demande pour <span class="font-semibold" v-if="game">{{game}}</span> <span class="font-semibold" v-else>Monopoly</span></p>
        <MessageComponent v-if="!blank" :text="'Bonjour, le Monopoly est disponible ?'" :sentByMe="true"></MessageComponent>
        <MessageComponent v-if="!blank" :text="'Oui pas de soucis !'" :sentByMe="false" :userImage="userImage"></MessageComponent>

        <MessageComponent :text="message" :sentByMe="true" v-for="(message, index) of userMessages" :key="index"></MessageComponent>
        
        <div v-if="(meeting && meeting.location)">
            <BookingMessageComponent :meeting="meeting"></BookingMessageComponent>
            <p class="text-gray-400 text-center">{{userName}} a reçu votre proposition de rendez-vous. Il doit encore l'accepter pour que celui-ci soit confirmé</p>
            <p v-if="accepted" class="secondary--text text-center font-bold">{{userName}} a accepté votre rendez-vous!</p>
            
        
        </div>
        
    </div>
  </template>

<script>

import MessageComponent from './MessageComponent.vue'
import BookingMessageComponent from './BookingMessageComponent.vue'

export default{
    props: ['userMessages', 'userImage', 'meeting', 'accepted', 'userName', 'blank'],
    components: {MessageComponent, BookingMessageComponent},
    data() {
        return {
            game: this.$route.query.game
        }
    }
}

</script>