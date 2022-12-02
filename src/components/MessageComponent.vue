<template>
<div class="flex gap-3 pb-3" :class=" sentByMe ? 'flex-row-reverse' : 'flex-row' ">

    <v-avatar size="40">
        <v-img v-if="userImage" :src="userImage"></v-img>
        <v-img v-else src='@/assets/userPP.png'></v-img>
    </v-avatar>
    <div class="rounded-lg bg-light-900 w-[60%] p-2" :class=" sentByMe ? 'bg-[#D4D64E]' : 'bg-light-900' ">{{text}}</div>
</div>

</template>


<script>

export default{
    props: ['text', 'sentByMe', 'userImage']
}

</script>