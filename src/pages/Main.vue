<template>
  <div>
    <div class="hero">
      <div class="hero-content">
        <h1>
          <span>
            Accessible mental health resources to cope with COVID-19
          </span>
        </h1>
        <label for="location-filter">See resources revelant to:</label>
        <v-select
          id="location-filer"
          v-model="selectedLocation"
          solo
          depressed
          dark
          :items="items"
        ></v-select>
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
      items: ['Anywhere', 'Toronto', 'Vancouver']
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

<style lang="scss" >
@import '../assets/styles/_variables.scss';

.hero {
  width: 100%;
  height: 60vh;
  min-height: 400px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  .hero-content {
    max-width: 800px;
    width: 85%;
    text-align: center;

    label {
      font-size: 2.4rem;
      font-family: 'PT Serif', serif;
      font-weight: bold;
      display: block;
      margin-bottom: 15px;
      margin-top: 30px;
    }

    .v-select {
      width: 300px;
      margin: 0 auto;
    }

    .v-input__slot {
      background-color: $navy !important;
    }
  }
}

@media (min-width: 769px) {
  .hero {
    background: url('../assets/desktop-heroimage.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media (max-width: 768px) {
  .hero {
    background: url('../assets/mobile-heroimage.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .hero-content {
    h1 {
      font-size: 2.5rem;
      font-weight: bold;

      span {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, $pale-blue 40%);
        line-height: 1.5;
      }
    }

    label {
      font-size: 1.6rem;
    }
  }
}
</style>
