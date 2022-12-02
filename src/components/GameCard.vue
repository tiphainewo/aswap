<template>
    <div class="flex flex-row items-start w-full bg-white hover:bg-gray-100 p-2 pb-0 rounded-lg">

        <img class="w-30 h-28 bg-grey-500 mb-2 rounded-lg"
            src="https://images.unsplash.com/photo-1585504198199-20277593b94f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3117&q=80" />

        <div class="flex flex-col px-3 justify-between h-30 overflow-hidden" v-if="user">
            <div>
                <p class="font-bold !m-0">{{ game.name }}</p>
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
                <v-chip small color="secondary">2-5 joueurs</v-chip>
                <v-chip small color="secondary">6+ ans</v-chip>
            </v-chip-group>
        </div>



    </div>

</template>


<script>

export default {
    props: ['game', 'user']
}

</script>