<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
h1,
h2,
h3 {
  font-family: 'PT Serif', Times, serf;
}

h1 {
  font-size: 4.4rem;
  font-weight: bold;
}

h2 {
  font-size: 3.6rem;
}

h3 {
  font-size: 2.4rem;
}

h4 {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;
}

h5 {
  font-size: 1.8rem;
  font-weight: normal;
}

@media (max-width: 768px) {
  h1 {
    font-size: 3.6rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.2rem;
  }
}

a {
  text-decoration: none;
}

main {
  flex: 1;
}

p {
  font-family: Poppins, sans-serif;
}

.v-btn {
  text-transform: none;
  font-family: Poppins, sans-serif !important;
}

@media (min-width: 769px) {
  .v-btn.primary {
    opacity: 1 !important;
    background: #6f8f9a !important;

    &:before {
      background: #6f8f9a !important;
    }

    &:hover:before,
    &:focus:before {
      background: #6f8f9a !important;
      opacity: 1 !important;
    }
  }
}
</style>
