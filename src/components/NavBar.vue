<template>
  <v-app-bar flat color="white">
    <router-link to="/">
      <img class="logo" src="../assets/logo.png" alt="TakeCare19" />
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/about">
      <v-btn text>
        about
      </v-btn>
    </router-link>
    <router-link to="/submit">
      <v-btn color="primary" depressed>
        add resource
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.v-toolbar {
  flex: none;
}

.logo {
  width: 150px;
}

a + a {
  margin-left: 50px;
}
</style>
