<template>
  <div>
    <v-app-bar flat color="white">
      <router-link to="/">
        <img class="logo" src="../../assets/logo.png" alt="TakeCare19" />
      </router-link>
      <v-spacer></v-spacer>
      <v-btn color="primary" depressed @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
    <div class="wrapper">
      <h1>Dashboard</h1>
    </div>
  </div>
</template>


<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/admin/login')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


