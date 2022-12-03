<template>
    <div class="flex flex-col content-between w-full h-full p-2 rounded">
        
        <div class="flex flex-col items-start justify-start w-full">
            <img class="w-full h-40 bg-grey-500 rounded" :src="game.image_url" />
        
            <p>{{game.name}}</p>
            <div class="flex gap-1 items-start">
                <v-chip small color="secondary">Jeu de plateau</v-chip>
                <v-chip small color="secondary">{{game.min_players}}-{{game.max_players}} joueurs</v-chip>
                <v-chip small color="secondary">{{game.min_age}}+ ans</v-chip>
            </div>

            
            <div class=" h-full truncate h-30" v-html="game.description"></div>
        </div>
            
        

        <v-btn class="w-full" color="secondary">Envoyer une demande</v-btn>
    </div>

</template>


<script>

export default {
    props: ['game']
}

</script>