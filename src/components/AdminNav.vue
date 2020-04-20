<template>
  <v-app-bar flat color="white">
    <router-link to="/">
      <img class="logo" src="../assets/logo.png" alt="TakeCare19" />
    </router-link>
    <v-spacer></v-spacer>
    <v-menu offset-y v-if="$vuetify.breakpoint.smAndDown">
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item>
          <router-link to="/admin/dashboard">Dashboard</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/admin/new">Add a new resource</router-link>
        </v-list-item>
        <v-list-item @click="logout">
          Logout
        </v-list-item>
      </v-list>
    </v-menu>
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn text to="/admin/dashboard">
        Dashboard
      </v-btn>
      <v-btn class="mr-10" text to="/admin/new">
        New Resource
      </v-btn>
      <v-btn color="primary" depressed @click="logout">
        Logout
      </v-btn>
    </div>
  </v-app-bar>
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



