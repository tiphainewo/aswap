<template>
    <v-main class="flex flex-col items-center mt-5 mx-5 gap-10" v-if="user">
        <div class="flex flex-row items-center border-1">
            <v-avatar size="80" bordered color="white" class="border-2" v-if="user.userImage">
                <v-img :src="user.userImage"></v-img>
            </v-avatar>

            <v-avatar color="secondary" v-else>
                <v-icon dark>
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            <p>{{ user.firstName + ' ' + user.lastName }}</p>
        </div>
    </v-main>
    
</template>

<script lang="ts">

export default { 
    props: ["users"],

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

  