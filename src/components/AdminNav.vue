<template>
  <div>
    <v-app-bar flat color="white">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png" alt="TakeCare19" />
      </router-link>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" text to="/admin/new">
        New Resource
      </v-btn>
      <v-btn color="primary" depressed @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AdminNav',
  methods: {
    ...mapActions(['logout'])
  }
}
</script>



