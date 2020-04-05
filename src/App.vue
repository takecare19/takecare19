<template>
  <v-app id="app">
    <h1 class="coming-soon">{{ title }}</h1>
  </v-app>
</template>

<script>
import db from './firebase/init'
export default {
  name: 'App',
  data() {
    return {
      title: ''
    }
  },
  created() {
    db.collection('copy')
      .doc('x7n5A5Ph5pLE39XgTHyq')
      .get()
      .then(res => (this.title = res.data().title))
  }
}
</script>

<style>
.v-btn {
  text-transform: none !important;
}

a {
  text-decoration: none !important;
  color: inherit !important;
}

.coming-soon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
