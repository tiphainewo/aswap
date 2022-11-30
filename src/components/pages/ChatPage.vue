<template>
    <v-main class="flex flex-col items-center gap-10 h-[80%]" v-if="user">
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
        <div class=" p-3 flex flex-col justify-between h-full">
        
            <ChatComponent></ChatComponent>
            <v-text-field
            append-outer-icon="mdi-send"
            prepend-icon="mdi-plus-circle"
            filled
            rounded
            dense
            @click:append-outer="sendMessage"
            @click:prepend="openBooking"
            v-model="newMessage"
          ></v-text-field>
        </div>
        
    </v-main>
    
</template>

<script lang="ts">
import ChatComponent from '../ChatComponent.vue';

export default { 
    props: ["users"],

    components: {ChatComponent},

    methods: {
        sendMessage(){
            console.log(this.newMessage)
        },
        openBooking(){
            this.booking = true;
            console.log(this.booking)
        }
    },

    data() {
        return {
            usersArray: this.users,
            id: this.$route.params.id,
            newMessage: "",
            booking : false,
        };
    },
    computed: {
        user() {
            return this.usersArray.find(user => user.id == this.id);
        }
    },
}

</script>

  