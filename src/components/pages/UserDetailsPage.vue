<template>
    <v-main class="d-flex justify-center align-center">
        <div v-if="user">
            <v-avatar size="50" bordered color="white" class="border-2" v-if="user.userImage">
                <v-img :src="user.userImage"></v-img>
            </v-avatar>

            <v-avatar color="secondary" v-else>
                <v-icon dark>
                    mdi-account-circle
                </v-icon>
            </v-avatar>


        </div>
        {{this.$route.params.id}}
        {{user}}
    </v-main>
</template>

<script setup lang="ts">


const props = defineProps(['users'])
const user=props.users[1]
</script>

  