<template>
    <div class="flex flex-col content-between w-full h-full p-2 rounded">

        <div class="flex flex-col place-start justify-start w-full gap-2 overflow-y-auto">
            <img class="w-full h-40 bg-grey-500 rounded-lg object-contain" :src="game.image_url" />

            <div class="text-xl font-bold mb-3">{{ game.name }}</div>
            <div class="flex flex-row items-center gap-2 flex-none">

                <div class="text-center">
                    <v-avatar size="30" v-if="user.userImage">
                        <v-img :src="user.userImage"></v-img>
                    </v-avatar>
                    {{ user.firstName }} {{ user.lastName }}
                </div>
                <v-rating color="secondary" length="5" :value="4.5" dense half-increments small></v-rating>

            </div>
            <div class="text-grey-400 text-xs !m-0">A 1.5km
                <span class="text-gray-600 underline ml-2" v-on:click="$router.push('/map')">Voir sur la carte</span>
            </div>

            <div class="mb-4">
                <v-chip class='mr-1' small color="secondary">Jeu de plateau</v-chip>
                <v-chip class='mr-1' small color="secondary">{{ game.min_players }}-{{ game.max_players }}
                    joueurs</v-chip>
                <v-chip small color="secondary">{{ game.min_age }}+ ans</v-chip>
            </div>

            <div>
                <div class="max-h-50 w-full overflow-hidden overflow-ellipsis">
                    <div v-html="game.description"></div>
                </div>
                <p class="text-gray-600 underline">Voir plus</p>
            </div>
        </div>



        <v-btn depressed class="w-full" color="secondary" rounded @click="$router.push(`/chat/${user.id}`)">Envoyer une demande</v-btn>
    </div>

</template>


<script>

export default {
    props: ['game', 'user']
}

</script>