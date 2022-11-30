<template>
<div class="flex py-4 gap-3" :class=" sentByMe ? 'flex-row-reverse' : 'flex-row' ">
    <v-avatar size="40">
        <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    <div class="rounded-lg bg-light-900 w-[60%] p-2" :class=" sentByMe ? 'bg-blue-400' : 'bg-light-900' ">{{text}}</div>
</div>

</template>


<script>

export default{
    props: ['text', 'sentByMe']
}

</script>