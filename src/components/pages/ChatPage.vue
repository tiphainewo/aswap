<template>
    <v-main class="flex flex-col items-center gap-10" v-if="user">
        <div class="flex flex-row items-center border-b-2 w-screen gap-3  p-3">
            <v-icon v-on:click="$router.push(`/inbox`);">
                    mdi-arrow-left
                </v-icon>
            <v-avatar size="50" bordered color="white" class="border-2" v-if="user.userImage">
                <v-img :src="user.userImage"></v-img>
            </v-avatar>

            <v-avatar color="secondary" v-else>
                <v-icon dark>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            <div class="font-bold">{{ user.firstName + ' ' + user.lastName }}</div>
        </div>
        <div class=" p-3 flex flex-col justify-between h-50">
        
            <ChatComponent></ChatComponent>
            <ChatTextField></ChatTextField>
        </div>
        
    </v-main>
    
</template>

<script lang="ts">
import ChatComponent from '../ChatComponent.vue';
import ChatTextField from '../ChatTextField.vue';



export default { 
    props: ["users"],

    components: {ChatComponent, ChatTextField},

    methods: {

    },

    data() {
        return {
            usersArray: this.users,
            id: this.$route.params.id,
        };
    },
    computed: {
        user() {
            return this.usersArray.find(user => user.id == this.id);
        }
    },
}

</script>

  