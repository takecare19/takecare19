<template>
  <div>
    <div class="hero">
      <div class="hero-content">
        <h1>Accessible mental health resources for coping with COVID-19</h1>
        <v-autocomplete
          v-model="selectedLocation"
          outlined
          :items="items"
          label="Choose a location"
          placeholder="Start typing to Search"
        ></v-autocomplete>
      </div>
    </div>
    <CategoriesList />
  </div>
</template>

<script>
import db from '../firebase/init'
import CategoriesList from '@/components/CategoriesList'

export default {
  name: 'Main',
  components: { CategoriesList },
  data() {
    return {
      resources: [],
      items: ['Anywhere']
    }
  },
  created() {
    this.selectedLocation = this.items[0]
    db.collection('resources')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.resources.push(doc.data())
        })
      })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 50vh;
  min-height: 300px;
  background: #b0bec5;
  position: relative;
  margin-bottom: 20px;

  .hero-content {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .v-input.v-autocomplete {
    margin: 20px auto 0;
    width: 300px;
  }
}
</style>
