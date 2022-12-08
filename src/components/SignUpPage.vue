<template>        
  <v-container >

        <div class="text-center">
          <v-avatar size="100" color="pink accent-1" >
            <v-icon size="40" color="white" >mdi-account-plus</v-icon>


          </v-avatar>
          <h2 class="pink--text font-weight-black">Inscription</h2>
        </div>
        
    <v-row>
  <v-col sm="6" offset-sm="3">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
        color="pink lighten-3"
        :complete="e1 > 1"
        step="1"
      >
     
      </v-stepper-step>
         <v-divider></v-divider>
      <v-stepper-step
         color="pink lighten-2"
        :complete="e1 > 2"
        step="2" >
       
      </v-stepper-step>
         <v-divider></v-divider>
     <v-stepper-step 
     color="pink lighten-1"
     step="3">
      
          </v-stepper-step> 
             </v-stepper-header>
                    
     <v-form @submit.prevent="submitStep1" ref="form1">
         <v-stepper-content step="1">
                 <v-text-field
                 v-model="name" 
                 :rules ="nameRules"
                  label="Nom"
                  placeholder="Nom"
                  required
                ></v-text-field>

                 <v-text-field
                 v-model="lastName" 
                 :rules ="nameRules"
                  label="Prenom"
                  placeholder="Prenom"
                  required
                ></v-text-field>
                <v-btn
                  class="white--text"
                  color="pink accent-2"
                  type = "submit">
                  Continue
                </v-btn>
              
               &nbsp; <router-link to="/" class="pink--text font-weight-black">Je possede un compte</router-link>
      </v-stepper-content>
     </v-form>

<v-form @submit.prevent="submitStep2" ref="form2">
      <v-stepper-content step="2">
            <v-text-field
                v-model="email"
                label="E-mail"
                placeholder="E-mail"
                :rules="emailRules"
                 type="email"
                required
              ></v-text-field>
              <v-text-field
              v-model="password"
              :rules="passwordRules"
              :type="passwordShow ? 'text' : 'password'"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="passwordShow = !passwordShow"
              required
                label="Mot de passe"
                placeholder="Mot de passe"
              ></v-text-field>
          
             <v-btn
             class="white--text"
              color="pink accent-2"
              type="submit" >
              Continue
              </v-btn >
              <v-btn text
              @click="(e1 =1)">
                Cancel
              </v-btn>

          
      </v-stepper-content>
    </v-form >

    <v-form  @submit.prevent="submitStep3" ref="form3">
      <v-stepper-content step="3">
        <div class="mb-6"> 
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="datte"
          label="Date de Naissance "
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          required
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="datte"
        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
      
    </v-menu>
  </div>

      <v-text-field
          :rules="phoneRules"
          placeholder="n°telephone"
          v-model="phone"
          label="Telephone"
          >
       
        </v-text-field>
        <v-btn
          class="white--text"
          color="pink accent-2"
          type="submit" >
          Continue
        </v-btn>

         <v-btn 
         text
         @click="(e1 =2)">
          Cancel
        </v-btn>
       
         </v-stepper-content>
        </v-form>
      </v-stepper>
    </v-col>
  </v-row>

</v-container>
</template>

<script>


export default {

       name: "SignUpPage",
       data: () => ({  
         
          picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
          e1: 1  ,
          step: 1 ,
           email :'',
           name : '' ,
           lastName : '',
           phone :"",
           date: null,
           menu: false,
           pickerDate: '1995-1-1' ,
          passwordShow: false,

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",

    ],
    nameRules :[
      (v) => !!v || "le Nom est Obligatoire",
      (v) => (v && v.length >= 8) || "Ce champ doit etre composé de 4 caractéres ou plus!",

    ],phoneRules :[
      (v) => !!v || "le Numero de telephone est Obligatoire",
        (v) => (v.match(/^0[1-9]([-. ]?[0-9]{2}){4}$/)) || 'Numero telephone invalide'

    
           ]  ,
     
  }),   methods: {

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
    submitStep3(){
      if (this.$refs.form3.validate()) {
        this.$emit("logIn");
        this.$router.push('/map')
      }
    },
      
     save (datte) {
      this.$refs.menu.save(datte)
      this.pickerDate = datte;
    },
    
  },
 }
  </script>
  
  

