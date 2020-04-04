<template>
  <v-app-bar flat color="white">
    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/about">About</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <router-link to="/">
      <v-toolbar-title>Take Care 19</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/submit">
      <v-btn x-large icon class="mobile-submit-button">
        <v-icon dark>mdi-plus-circle</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>
.v-toolbar {
  flex: none;
}
</style>
