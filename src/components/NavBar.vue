<template>
  <v-app-bar flat color="white">
    <router-link to="/about" class="about--mobile">
      <v-icon large>mdi-information</v-icon>
    </router-link>
    <router-link to="/">
      <img class="logo" src="../assets/logo.png" alt="TakeCare19" />
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/about" class="about--desktop">
      <v-btn text>
        about
      </v-btn>
    </router-link>
    <router-link to="/submit" class="submit--desktop">
      <v-btn color="primary" depressed>
        add resource
      </v-btn>
    </router-link>
    <router-link to="/submit" class="submit--mobile">
      <v-icon large>
        mdi-plus-circle
      </v-icon>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
.v-toolbar {
  flex: none;

  .logo {
    width: 150px;
  }

  a + a {
    margin-left: 50px;
  }
}

.about--mobile .v-icon {
  color: $denim !important;
}

.submit--mobile .v-icon {
  color: $navy !important;
}

@media (min-width: 769px) {
  .about--mobile,
  .submit--mobile {
    display: none;
  }

  .about--desktop,
  .submit--desktop {
    display: block;
  }
}

@media (max-width: 768px) {
  .about--mobile,
  .submit--mobile {
    display: block;
  }

  .about--desktop,
  .submit--desktop,
  .v-toolbar__content .spacer {
    display: none;
  }

  .v-toolbar__content {
    justify-content: space-between;
  }
}
</style>
