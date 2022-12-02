<template>
    <div class="flex flex-col content-between w-full h-full p-2 rounded gap-2">
        <div class="rounded-full h-1.5 bg-light-900 w-[30%] self-center"></div>

        <div class="flex flex-col items-start w-full gap-7">
            <p class="font-semibold text-[#D94693] text-lg !m-0 !p-0">Créer un rendez-vous pour <span class="font-bold">{{ game.name }}</span></p>

            <div class="w-full">
                <p class="font-semibold !m-0">Date et heure de début</p>
                <!-- Date picker -->
                <v-dialog ref="dialogDate" v-model="modal" :return-value.sync="date" persistent>
                    <template v-slot:activator="{ on, attrs }" >
                        <v-text-field 
                            v-model="dateFormatted"
                            light
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="date = parseDate(dateFormatted)"
                            v-on="on"
                            readonly
                            class="p-0"
                            hide-details
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable color="secondary" :first-day-of-week="1"
      locale="fr-fr">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                            Annuler
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialogDate.save(date)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-dialog>

                <!-- Time picker -->
                <v-dialog
                    ref="dialogTime"
                    v-model="modal2"
                    :return-value.sync="time"
                    persistent
                    width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="time"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        light
                        class="p-0"
                        hide-details
                    ></v-text-field>
                    </template>
                    <v-time-picker
                        v-if="modal2"
                        v-model="time"
                        full-width
                        format="24hr"
                        >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="modal2 = false"
                    >
                        Annuler
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.dialogTime.save(time)"
                    >
                        OK
                    </v-btn>
                    </v-time-picker>
                </v-dialog>
            </div>

            <div class="w-full">
                <p class="font-semibold !m-0">Date et heure de fin</p>
                <!-- Date picker -->
                <v-dialog ref="dialogDateFin" v-model="modal" :return-value.sync="date" persistent>
                    <template v-slot:activator="{ on, attrs }" >
                        <v-text-field 
                            v-model="dateFormatted"
                            light
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="date = parseDate(dateFormatted)"
                            v-on="on"
                            readonly
                            class="p-0"
                            hide-details
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable color="secondary" :first-day-of-week="1"
      locale="fr-fr">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                            Annuler
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialogDateFin.save(date)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-dialog>

                <!-- Time picker -->
                <v-dialog
                    ref="dialogTimeFin"
                    v-model="modal2"
                    :return-value.sync="time"
                    persistent
                    width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="time"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        light
                        class="p-0"
                        hide-details
                    ></v-text-field>
                    </template>
                    <v-time-picker
                        v-if="modal2"
                        v-model="time"
                        full-width
                        format="24hr"
                        >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="modal2 = false"
                    >
                        Annuler
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.dialogTimeFin.save(time)"
                    >
                        OK
                    </v-btn>
                    </v-time-picker>
                </v-dialog>
            </div>

            <div class="w-full h-[40%]">
                <p class="font-semibold !m-0">Lieu de rendez-vous</p>
                <!-- <v-text-field 
                    v-model="location"
                    light
                    prepend-icon="mdi-map-marker"
                    hide-details
                ></v-text-field> -->

<LocationPicker :location="location" @changeLocation="changeLocation"/>
            </div>
            
            
            
        </div>
        


        <v-btn class="w-full" color="secondary" :click="$emit('sendMeeting')">Envoyer le rendez-vous</v-btn>
    </div>


</template>


<script>
import MapPage from './pages/MapPage.vue'
import LocationPicker from './LocationPicker.vue'



export default {

    components: {
    MapPage,
    LocationPicker
},

    props: ['game'],

    data: vm => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    modal: false,
    modal2: false,
    time: null,
    location: [4.829539, 45.740351],
    apiKey: "pk.eyJ1IjoicHJvamV0aW50ZWdyZTIwMjEiLCJhIjoiY2t1NWczYmoyMDdnYjJxcGFycnEwYTZpbCJ9.l5DP13cyiFb7yyokZhg1Cg"
  }),

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },

  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    changeLocation(coords) {
        this.location= coords;
    }
  },
}

</script>