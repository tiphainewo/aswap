<template>
  <div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="8" lg="4" class="mx-auto">
        <div class="text-center">
          <v-avatar size="100" color="pink accent-1">
            <v-icon size="40" color="white">mdi-account-key</v-icon>
          </v-avatar>
          <h2 class="pink--text font-weight-black">Connexion</h2>
        </div>
  
   
        <v-form @submit.prevent="submitHandler" ref="form">
          <v-card-text>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              type="email"
              label="Email"
              placeholder="Email"
              required
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :type="passwordShow? 'text' : 'password'"
              label="Mot de passe"
              placeholder="Mot de passe"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="passwordShow = !passwordShow"
              required
            />
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn  type="submit" color="pink accent-2">
              <span class="white--text px-8">Connexion
              </span>
            </v-btn>
          </v-card-actions>

          <router-link to="/signup"  class="pink--text font-weight-black">Pas de compte? Inscrivez-vous</router-link>
        </v-form>
          
   
      </v-col>
    </v-main>
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
      (v) => !!v || "un e-mail est Obligatoire",
      (v) => /.+@.+\..+/.test(v) || " il faut que l'e-mail soit valide",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "le Mot de passe est obligatoire",
      (v) => (v && v.length >= 8) || "Le Mot de passe doit etre composé de 8 caractéres ou plus!",
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

