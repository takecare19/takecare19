<template>
  <div class="login-form-container">
    <h1>Admin login</h1>
    <v-form ref="form" v-model="valid" @submit="login">
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
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'

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
    login(e) {
      e.preventDefault()
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/admin/dashboard')
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form-container {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>