<template>
  <div class="h-full bg-[#EDEEB6]">
    <div class="flex flex-col justify-center items-center m-5 gap-10">

      <div class="text-center">
        <v-avatar size="100" color="accent">
          <v-icon size="40" color="white">mdi-account-key</v-icon>
        </v-avatar>
        <h2 class="text-[#50398E] font-weight-black text-xl">Connexion</h2>
      </div>


      <div class="w-full text-center">
        <v-form @submit.prevent="submitHandler" ref="form" class="bg-[#D4D64E] p-5 rounded-xl ">
          <v-card-text>
            <v-text-field color="secondary" v-model="email" :rules="emailRules" type="email" label="Email" placeholder="Email" required />
            <v-text-field color="secondary" v-model="password" :rules="passwordRules" :type="passwordShow ? 'text' : 'password'"
              label="Mot de passe" placeholder="Mot de passe" :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="passwordShow = !passwordShow" required />
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn depressed type="submit" color="secondary" rounded class="w-full">
              <span class="white--text px-8">Connexion
              </span>
            </v-btn>
          </v-card-actions>


        </v-form>
        <router-link to="/signup" class="!text-[#D94693] font-weight-black">Pas de compte? Inscrivez-vous</router-link>
      </div>



    </div>
  </div>
</template>

<script >
export default {
  name: "LoginPage",
  props: ["loggedIn"],

  data: () => ({
    passwordShow: false,
    email: "",
    emailRules: [
      (v) => !!v || "Ce champ est obligatoire",
      (v) => /.+@.+\..+/.test(v) || " Format d'email non valide",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Ce champ est obligatoire",
      (v) => (v && v.length >= 6) || "Le mot de passe doit faire 6 caractères ou plus!",
    ],
  }),

  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.$emit("logIn");
        this.$router.push("/home");
      }
    },
  },
};
</script>

