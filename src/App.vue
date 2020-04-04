<template>
  <v-app id="app">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </v-app>
</template> 

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { NavBar, Footer }
};
</script>

<style>
.v-btn {
  text-transform: none !important;
}

a {
  text-decoration: none !important;
  color: inherit !important;
}

</style>