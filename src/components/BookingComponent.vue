<template>
    <div class="flex flex-col content-between w-full h-full p-2 rounded gap-2">
        <div class="rounded-full h-1.5 bg-light-900 w-[30%] self-center"></div>

        <div class="flex flex-col items-start w-full gap-7 overflow-y-auto">
            <p class="font-semibold text-[#D94693] text-lg !m-0 !p-0">Créer un rendez-vous pour <span
                    class="font-bold">{{ game.name }}</span></p>

            <div class="w-full">
                <p class="font-semibold !m-0">Date et heure de début</p>
                <!-- Date picker -->
                <v-dialog ref="dialogDate" v-model="modalDate1" :return-value.sync="date1" persistent>
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="dateFormatted1" light prepend-icon="mdi-calendar" v-bind="attrs"
                            @blur="date1 = parseDate(dateFormatted1)" v-on="on" readonly class="p-0"
                            hide-details></v-text-field>
                    </template>
                    <v-date-picker v-model="date1" scrollable color="secondary" :first-day-of-week="1" locale="fr-fr">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modalDate1 = false">
                            Annuler
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialogDate.save(date1)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-dialog>

                <!-- Time picker -->
                <v-dialog ref="dialogTime" v-model="modalTime1" :return-value.sync="time1" persistent width="290px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="time1" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs"
                            v-on="on" light class="p-0" hide-details></v-text-field>
                    </template>
                    <v-time-picker v-if="modalTime1" v-model="time1" full-width format="24hr" color="secondary">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modalTime1 = false">
                            Annuler
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialogTime.save(time1)">
                            OK
                        </v-btn>
                    </v-time-picker>
                </v-dialog>
            </div>

            <div class="w-full">
                <p class="font-semibold !m-0">Date et heure de fin</p>
                <!-- Date picker -->
                <v-dialog ref="dialogDateFin" v-model="modalDate2" :return-value.sync="date2" persistent>
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="dateFormatted2" light prepend-icon="mdi-calendar" v-bind="attrs"
                            @blur="date2 = parseDate(dateFormatted2)" v-on="on" readonly class="p-0"
                            hide-details></v-text-field>
                    </template>
                    <v-date-picker v-model="date2" scrollable color="secondary" :first-day-of-week="1" locale="fr-fr">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modalDate2 = false">
                            Annuler
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialogDateFin.save(date2)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-dialog>

                <!-- Time picker -->
                <v-dialog ref="dialogTimeFin" v-model="modalTime2" :return-value.sync="time2" persistent width="290px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="time2" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs"
                            v-on="on" light class="p-0" hide-details></v-text-field>
                    </template>
                    <v-time-picker v-if="modalTime2" v-model="time2" full-width format="24hr" color="secondary">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modalTime2 = false">
                            Annuler
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialogTimeFin.save(time2)">
                            OK
                        </v-btn>
                    </v-time-picker>
                </v-dialog>
            </div>

            <div class="w-full h-[40%] mb-5">
                <p class="font-semibold !m-0">Lieu de rendez-vous</p>
                <!-- <v-text-field 
                    v-model="location"
                    light
                    prepend-icon="mdi-map-marker"
                    hide-details
                ></v-text-field> -->

                <div class="w-full h-full">
                    <v-text-field v-model="address" prepend-icon="mdi-map-marker-outline" @input="changeAddress()"></v-text-field>
                    <LocationPicker :location="location" @changeLocation="changeLocation" />
                </div>
            </div>
        </div>



        <v-btn rounded :disabled="!complete" depressed class="w-full" color="secondary" @click="sendMeeting">Envoyer le
            rendez-vous</v-btn>
    </div>


</template>


<script>
import MapPage from './pages/MapPage.vue'
import LocationPicker from './LocationPicker.vue'
import axios from 'axios'


export default {

    components: {
        MapPage,
        LocationPicker
    },

    props: ['game'],

    data: vm => ({
        date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateFormatted1: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        dateFormatted2: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        modalDate1: false,
        modalDate2: false,
        modalTime1: false,
        modalTime2: false,
        time1: null,
        time2: null,
        location: [4.835659, 45.748043],
        apiKey: "pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg",
        address: "",
    }),

    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date)
        },

        complete() {
            return (this.time1 && this.time2 && this.date1 && this.date2 && this.location)
        }

    },

    watch: {
        date1(val) {
            this.dateFormatted1 = this.formatDate(this.date1)
        },
        date2(val) {
            this.dateFormatted2 = this.formatDate(this.date2)
        },
    },

    methods: {
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        parseDate(date) {
            if (!date) return null

            const [day, month, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        changeLocation(coords) {
            this.location = [];
            this.location.push(coords.lng);
            this.location.push(coords.lat);
            console.log(coords)

            axios
                .get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.lng},${coords.lat}.json?types=place%2Cpostcode%2Caddress&limit=1&access_token=pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg`
                )
                .then((response) => (this.address = response.data.features[0].place_name))
                .catch((error) => console.log(error));

            console.log(this.address)

        },
        changeAddress(){
            // let results;
            // axios
            //     .get(
            //         `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(this.address)}.json?types=place%2Cpostcode%2Caddress&limit=1&access_token=pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg`
            //     )
            //     .then((response) => (results = response.data.features[0].coordinates))
            //     .catch((error) => console.log(error));

            console.log(this.address)
        },
        sendMeeting() {
            this.$emit('send-meeting', { time1: this.time1, time2: this.time2, date1: this.date1, date2: this.date2, location: this.location, address: this.address })
        }
    },
}

</script>