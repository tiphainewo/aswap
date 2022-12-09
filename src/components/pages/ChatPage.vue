<template>
    <div class="flex flex-col items-center h-full w-full" v-if="user">
        <div class="flex flex-row items-center border-b-2 w-screen gap-3  p-3">
            <v-icon v-on:click="$router.go(-1)">
                mdi-arrow-left
            </v-icon>
            <v-avatar size="50" v-if="user.userImage">
                <v-img :src="user.userImage"></v-img>
            </v-avatar>

            <v-avatar color="secondary" v-else>
                <v-icon dark>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            <div class="font-bold">{{ user.firstName + ' ' + user.lastName }}</div>
        </div>
        <div class=" p-3 flex flex-col justify-between h-full w-full">

            <ChatComponent :blank="blank" :userName="user.firstName" :userMessages="userMessages" :userImage="user.userImage" :meeting="meeting" :accepted="accepted"></ChatComponent>
            <div class="bg-white p-2 fixed bottom-8 w-[95%]">
                <v-text-field append-outer-icon="mdi-send" prepend-icon="mdi-calendar-plus" filled rounded dense
                    @click:append-outer="sendMessage" @click:prepend="openBooking" v-model="newMessage"
                    v-on:keyup.enter="sendMessage"></v-text-field>
            </div>

        </div>

        <v-overlay :value="booking" :opacity="0.2" v-on:click.stop="(booking = false)"></v-overlay>

        <div v-if="booking" class="z-10 w-screen rounded-t-3xl bg-white h-[80%] fixed bottom-0 left-0 p-5 text-black">
            <BookingComponent :game="game" @send-meeting="sendMeeting"></BookingComponent>
        </div>
    </div>

</template>

<script lang="ts">
import ChatComponent from '../ChatComponent.vue';
import BookingComponent from '../BookingComponent.vue';

export default {
    props: ["users"],

    components: { ChatComponent, BookingComponent },

    methods: {
        sendMessage() {
            this.userMessages.push(this.newMessage)
            this.newMessage = ""
        },
        openBooking() {
            this.booking = true;
        },
        sendMeeting(payload) {
            this.booking = false
            this.meeting = payload;
            setTimeout(
                _ => this.accepted=true,
                3000)
        }
    },

    data() {
        return {
            usersArray: this.users,
            id: this.$route.params.id,
            newMessage: "",
            booking: false,
            userMessages: [],
            accepted: false,
            game: {
                name: "Monopoly",
                image: "https://images.unsplash.com/photo-1585504198199-20277593b94f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3117&q=80",
                type: "Jeu de plateau",
                joueurs: "2-5",
                age: "10+"
            },
            meeting: {}
        };
    },
    computed: {
        user() {
            return this.usersArray.find(user => user.id == this.id);
        },
        blank(){
            if (this.id == '1' || this.id == '2' ||this.id == '3' ){
                return false
            } 
         
                return true;
          
        }
    },
}

</script>

  