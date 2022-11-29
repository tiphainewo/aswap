<template>
    <div class="flex flex-col content-between w-full h-full p-2 rounded">
        
        <div class="flex flex-col items-start w-full">
            <img class="w-full h-40 bg-grey-500 rounded" src="https://images.unsplash.com/photo-1585504198199-20277593b94f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3117&q=80" />
        
            <p>{{game.name}}</p>
            <div class="flex gap-1 items-start">
                <v-chip x-small>Jeu de plateau</v-chip>
                <v-chip x-small>2-5 joueurs</v-chip>
                <v-chip x-small>6+ ans</v-chip>
            </div>

        </div>
            
        

        <v-btn class="w-full" color="secondary">Envoyer une demande</v-btn>
    </div>

</template>


<script>

export default {
    props: ['game']
}

</script>