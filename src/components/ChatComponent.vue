<template>
    <div>
        <MessageComponent :text="'Bonjour, je voudrais bien blablablablab. Bla bla bla'" :sentByMe="false" :userImage="userImage"></MessageComponent>
        <MessageComponent :text="'oui blabla'" :sentByMe="true"></MessageComponent>

        <MessageComponent :text="message" :sentByMe="true" v-for="(message, index) of userMessages" :key="index"></MessageComponent>
        
        <BookingMessageComponent v-if="(meeting && meeting.location)" :meeting="meeting"></BookingMessageComponent>
    </div>
  </template>

<script>

import MessageComponent from './MessageComponent.vue'
import BookingMessageComponent from './BookingMessageComponent.vue'

export default{
    props: ['userMessages', 'userImage', 'meeting'],
    components: {MessageComponent, BookingMessageComponent}
}

</script>