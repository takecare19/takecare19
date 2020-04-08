<template>
  <v-app id="app">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: { NavBar, Footer }
}
</script>

<style>
@import './assets/style.scss';
</style>
