<template>
    <div>
        <MessageComponent :text="'Bonjour, je voudrais bien blablablablab. Bla bla bla'" :sentByMe="false"></MessageComponent>
        <MessageComponent :text="'oui blabla'" :sentByMe="true"></MessageComponent>
        
    </div>
  </template>

<script>

import MessageComponent from './MessageComponent.vue'

export default{
    components: {MessageComponent}
}

</script>