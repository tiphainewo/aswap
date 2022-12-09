<template>
  <div class="h-full bg-[#EDEEB6]">

    <div class="flex flex-col justify-center items-center m-5 gap-10">

      <div class="text-center">
        <v-avatar size="100" color="accent">
          <v-icon size="40" color="white">mdi-account-plus</v-icon>
        </v-avatar>
        <h2 class="text-[#50398E] font-weight-black text-xl">Inscription</h2>
      </div>

      <div class="w-full text-center">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step color="pink lighten-3" :complete="e1 > 1" step="1">

              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="secondary lighten-2" :complete="e1 > 2" step="2">

              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="pink lighten-1" step="3">

              </v-stepper-step>
            </v-stepper-header>

            <v-form @submit.prevent="submitStep1" ref="form1">
              <v-stepper-content step="1">
                <div class="flex flex-col">
                  <v-text-field v-model="name" :rules="nameRules" label="Nom" placeholder="Nom" required></v-text-field>

                  <v-text-field v-model="lastName" :rules="nameRules" label="Prénom" placeholder="Prénom"
                    required></v-text-field>
                  <v-btn class="white--text" color="secondary" type="submit" rounded depressed>
                    Continuer
                  </v-btn>


                </div>

              </v-stepper-content>
            </v-form>

            <v-form @submit.prevent="submitStep2" ref="form2">
              <v-stepper-content step="2">
                <v-text-field v-model="email" label="E-mail" placeholder="E-mail" :rules="emailRules" type="email"
                  required></v-text-field>
                <v-text-field v-model="password" :rules="passwordRules" :type="passwordShow ? 'text' : 'password'"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'" @click:append="passwordShow = !passwordShow"
                  required label="Mot de passe" placeholder="Mot de passe"></v-text-field>

                <v-btn class="white--text" color="secondary" type="submit" rounded depressed>
                  Continuer
                </v-btn>
                <v-btn text @click="(e1 = 1)">
                  Annuler
                </v-btn>


              </v-stepper-content>
            </v-form>

            <v-form @submit.prevent="submitStep3" ref="form3">
              <v-stepper-content step="3">
                <div class="mb-6">
                  <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition"
                    offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="date" label="Date de Naissance " prepend-icon="mdi-calendar" readonly
                        v-bind="attrs" v-on="on" required></v-text-field>
                    </template>
                    <v-date-picker v-model="date"
                      :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                      min="1950-01-01" @change="save"></v-date-picker>

                  </v-menu>
                </div>

                <v-text-field :rules="phoneRules" placeholder="n°telephone" v-model="phone" label="Telephone">

                </v-text-field>
                <v-btn class="white--text" color="secondary" type="submit" rounded depressed>
                  Continuer
                </v-btn>

                <v-btn text @click="(e1 = 2)">
                  Cancel
                </v-btn>

              </v-stepper-content>
            </v-form>
          </v-stepper>
          
          <router-link to="/" class="secondary--text font-weight-black">Déja un compte? Connectez-vous</router-link>
        </div>
    </div>
  </div>
</template>

<script>


export default {

  name: "SignUpPage",
  data: () => ({

    picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    e1: 1,
    step: 1,
    email: '',
    name: '',
    lastName: '',
    phone: "",
    date: null,
    menu: false,
    pickerDate: '1995-1-1',
    passwordShow: false,

    emailRules: [
      (v) => !!v || "Ce champ est obligatoire",
      (v) => /.+@.+\..+/.test(v) || "Format d'email non valide!",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Ce champ est obligatoire",
      (v) => (v && v.length >= 6) || "Le mot de passe doit faire plus de 6 caractères!",

    ],
    nameRules: [
      (v) => !!v || "Ce champ est obligatoire",

    ], phoneRules: [
      (v) => !!v || "Ce champ est obligatoire",
      (v) => (v.match(/^0[1-9]([-. ]?[0-9]{2}){4}$/)) || 'Numero de téléphone invalide'


    ],

  }), methods: {

    goTo(page) {
      this.$router.push(`/${page}`);
    },

    submitStep1() {
      if (this.$refs.form1.validate()) {
        this.$emit("logIn");
        this.e1 = 2
      }

    },
    submitStep2() {
      if (this.$refs.form2.validate()) {
        this.$emit("logIn");
        this.e1 = 3
      }

    },
    submitStep3() {
      if (this.$refs.form3.validate()) {
        this.$emit("logIn");
        this.$router.push('/home')
      }
    },

    save(date) {
      this.$refs.menu.save(date)
      this.pickerDate = date;
    },

  },
}
</script>
  
  

