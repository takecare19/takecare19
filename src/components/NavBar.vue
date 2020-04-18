<template>
  <v-app-bar flat color="white">
    <router-link to="/about" class="about--mobile">
      <v-icon large>mdi-information</v-icon>
    </router-link>
    <router-link to="/">
      <img class="logo" src="../assets/logo.png" alt="TakeCare19" />
    </router-link>
    <v-spacer></v-spacer>
    <v-btn to="/about" class="about--desktop" text>
      about
    </v-btn>
    <v-btn
      href="https://docs.google.com/forms/d/e/1FAIpQLSepscN5ZHSy7hQ2rxS40Z93ItSWljyvHAsN8gBy6k1HngdV4Q/viewform"
      target="_blank"
      class="submit--desktop"
      color="primary"
      depressed
    >
      add resource
    </v-btn>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSepscN5ZHSy7hQ2rxS40Z93ItSWljyvHAsN8gBy6k1HngdV4Q/viewform"
      class="submit--mobile"
    >
      <v-icon large>
        mdi-plus-circle
      </v-icon>
    </a>
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
    display: none !important;
  }

  .about--desktop,
  .submit--desktop {
    display: inline-flex !important;
  }
}

@media (max-width: 768px) {
  .about--mobile,
  .submit--mobile {
    display: inline-flex !important;
  }

  .about--desktop,
  .submit--desktop,
  .v-toolbar__content .spacer {
    display: none !important;
  }

  .v-toolbar__content {
    justify-content: space-between;
  }
}
</style>
