<template>
    <div class="w-full">
        <p class="text-gray-400 text-center">Lucas a fait une demande pour <span class="font-semibold">Monopoly</span></p>
        <MessageComponent :text="'Bonjour, le Monopoly est disponible ?'" :sentByMe="true"></MessageComponent>
        <MessageComponent :text="'Oui pas de soucis !'" :sentByMe="false" :userImage="userImage"></MessageComponent>

        <MessageComponent :text="message" :sentByMe="true" v-for="(message, index) of userMessages" :key="index"></MessageComponent>
        
        <div v-if="(meeting && meeting.location)">
            <BookingMessageComponent :meeting="meeting"></BookingMessageComponent>
            <p class="text-gray-400 text-center">{{userName}} a reçu votre proposition de rendez-vous. Il doit encore l'accepter pour que celui-ci soit confirmé</p>
            <p v-if="accepted" class="secondary--text text-center">{{userName}} a accepté votre rendez-vous!</p>
            
        
        </div>
        
    </div>
  </template>

<script>

import MessageComponent from './MessageComponent.vue'
import BookingMessageComponent from './BookingMessageComponent.vue'

export default{
    props: ['userMessages', 'userImage', 'meeting', 'accepted', 'userName'],
    components: {MessageComponent, BookingMessageComponent}
}

</script>