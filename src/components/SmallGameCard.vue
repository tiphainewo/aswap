<template>
    <div class="flex flex-col items-center w-full p-2 pb-0"
        @click="$emit('select-user', { game: game, user: user })">
        <div class="bg-white rounded-lg">
            <img class="object-contain w-40 min-w-40 h-28 bg-grey-500 mb-2 rounded-lg" :class="disabled && 'opacity-40'"
            :src="game.image_url" v-if="game.image_url" />
        <div v-else class="w-30 min-w-30 h-28 bg-grey-500 mb-2 rounded-lg"></div>
        </div>

        

        <p v-if="disabled" class="absolute w-30 text-center mt-11 font-semibold">Pas disponible</p>

        <p class="font-bold !m-0 truncate">{{ game.name }}</p>




    </div>

</template>


<script>

export default {
    props: ['game', 'user', 'disabled']
}

</script>
