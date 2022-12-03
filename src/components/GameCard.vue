<template>
    <div class="flex flex-row items-start w-full bg-white p-2 pb-0 rounded-lg" @click="$emit('select-user', {game: game, user: user})">

        <img class="object-contain w-30 min-w-30 h-28 bg-grey-500 mb-2 rounded-lg" :class="disabled && 'opacity-40'"
            :src="game.image_url"  v-if="game.image_url"/>
        <div v-else class="w-30 min-w-30 h-28 bg-grey-500 mb-2 rounded-lg"></div>

        <p v-if="disabled" class="absolute w-30 text-center mt-11 font-semibold">Pas disponible</p>

        <div class="flex flex-col px-3 justify-between h-30 overflow-hidden" v-if="user">
            <div>
                <p class="font-bold !m-0 truncate">{{ game.name }}</p>
                <p class="text-grey-400 text-xs !m-0">A 1.5km</p>
                <p class="text-xs !m-0">
                    <v-avatar size="20" v-if="user.userImage">
                        <v-img :src="user.userImage"></v-img>
                    </v-avatar>
                    {{ user.firstName }} {{ user.lastName }}
                </p>
            </div>
            <v-chip-group color="secondary">
                <v-chip small color="secondary">Jeu de plateau</v-chip>
                <v-chip small color="secondary">{{game.min_players}}-{{game.max_players}} joueurs</v-chip>
                <v-chip small color="secondary">{{game.min_age}}+ ans</v-chip>
            </v-chip-group>

        </div>



    </div>

</template>


<script>

export default {
    props: ['game', 'user', 'disabled']
}

</script>
