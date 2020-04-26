<template>
  <v-app-bar flat color="white" fixed>
    <div class="nav-wrapper">
      <router-link to="/about" class="about--mobile">
        <v-icon large>mdi-information</v-icon>
      </router-link>
      <router-link to="/" class="logo-link">
        <img class="logo" src="../assets/logo.svg" alt="TakeCare19" />
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
        target="_blank"
      >
        <v-icon large>
          mdi-plus-circle
        </v-icon>
      </a>
    </div>
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
    margin-left: 25px;
  }

  .logo-link {
    margin-left: 0;
  }
}

.about--mobile .v-icon {
  color: $denim !important;
}

.submit--mobile .v-icon {
  color: $navy !important;
}

.nav-wrapper {
  max-width: 1000px;
  width: 85%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
}

.v-toolbar__content {
  padding: 0;
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
