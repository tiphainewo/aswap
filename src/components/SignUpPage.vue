<template>
  <div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <div class="text-center">
          <v-avatar size="100" color="indigo lighten-4">
            <v-icon size="40" color="indigo">mdi-account</v-icon>
          </v-avatar>
          <h2 class="indigo--text">Inscription</h2>
        </div>

        <v-form @submit.prevent="submitHandler" ref="form">
          <v-card-text>
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              label="Prénom"
              placeholder="Prénom"
              required
            />

            <v-text-field
              v-model="lastName"
              :rules="nameRules"
              label="Nom"
              placeholder="Nom"
              required
            />

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
              :type="passwordShow ? 'text' : 'password'"
              label="Password"
              placeholder="Password"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="passwordShow = !passwordShow"
              required
            />
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn :loading="loading" type="submit" color="indigo">
              <span class="white--text px-8">Inscription</span>
            </v-btn>
          </v-card-actions>
          <router-link to="/login"
            >Vous avez-déjà un compte? Connectez-vous</router-link
          >
        </v-form>
      </v-col>
    </v-main>
  </div>
</template>

<script lang="ts">
export default {
  name: "SignUpPage",
  props: ["loggedIn"],

  data: () => ({
    passwordShow: false,
    firstName: "",
    lastName: "",

    nameRules: [(v) => !!v || "Ce champ est requis"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
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
