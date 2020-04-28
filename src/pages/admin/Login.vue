<template>
  <div class="background">
    <v-card class="login-form-container">
      <img class="my-8" src="../../assets/logo.png" alt="Take Care 19" />
      <v-form ref="form" v-model="valid" @submit="handleSubmit">
        <h1 class="mb-5">Admin login</h1>
        <v-text-field outlined v-model="email" label="Email" :rules="emailRules"></v-text-field>
        <v-text-field
          outlined
          v-model="password"
          label="Password"
          type="password"
          :rules="[v => !!v || 'Enter a password']"
        ></v-text-field>
        <v-btn color="primary" class="mr-4" :disabled="!valid" type="submit">
          Login
        </v-btn>
      </v-form>
      <p v-if="error">{{ error }}</p>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      error: null,
      valid: false,
      password: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit(e) {
      e.preventDefault()
      this.login({ email: this.email, password: this.password })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/_variables';
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: $sky;
}
.login-form-container {
  max-width: 600px;
  min-width: 280px;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 200px;
  margin: 0 auto;
  display: block;
}
</style>