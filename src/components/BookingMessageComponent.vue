<template>
    <div class="flex py-3 gap-3 flex-row-reverse">

        <v-avatar size="40">
            <v-img src='@/assets/userPP.png'></v-img>
        </v-avatar>
        <div class="rounded-lg bg-light-900 w-[80%] p-2 bg-[#D4D64E] flex flex-col gap-2">
            <p class="font-semibold">Proposition de rendez-vous</p>
            <p>Prêt : le {{ moment(meeting.date1) }} à {{ meeting.time1 }} <br />
                Retour : le {{ moment(meeting.date2) }} à {{ meeting.time2 }}</p>
            <p class="!m-0">{{meeting.address}}</p>
            <div class="w-full h-40">
                <MiniMap :location="meeting.location"></MiniMap>
            </div>
        </div>
    </div>

</template>


<script>
import MiniMap from './MiniMap.vue';
import moment from 'moment';

export default {
    props: ['meeting'],
    components: {
        MiniMap
    },

    methods: {
        moment(date) {
            moment.locale('fr')
            return moment(date).format('Do MMMM YYYY')
        }
    },
}

</script>