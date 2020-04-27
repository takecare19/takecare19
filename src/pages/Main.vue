<template>
  <Layout>
    <div>
      <div class="hero">
        <div class="hero-content">
          <h1>
            <span>
              Accessible & Inclusive Mental Health Resources for Coping Through COVID&#x2011;19
            </span>
          </h1>
          <!-- <label for="location-filter">See resources revelant to:</label>
        <v-select
          id="location-filer"
          v-model="selectedLocation"
          solo
          depressed
          dark
          :items="items"
        ></v-select> -->
        </div>
      </div>
      <div class="wrapper">
        <h2>Resources</h2>
        <CategoriesList />
        <ResourceList :resources="allResources" :category="selectedCategory" />
        <div class="load-more-container">
          <v-btn text :disabled="endOfResources" class="mt-5" @click="seeMore">
            {{ endOfResources ? 'End of list' : 'Load more' }}
          </v-btn>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import CategoriesList from '@/components/CategoriesList'
import ResourceList from '@/components/ResourceList'
import Layout from '@/components/Layout'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Main',
  components: { CategoriesList, ResourceList, Layout },
  data() {
    return {
      items: ['Anywhere', 'Toronto', 'Vancouver'],
      selectedLocation: 'Anywhere'
    }
  },
  computed: {
    ...mapGetters(['allResources', 'selectedCategory', 'endOfResources', 'isLoadingResources'])
  },
  created() {
    this.fetchResources()
    this.fetchTags()
    this.fetchLocations()
  },
  methods: {
    ...mapActions(['fetchResources', 'fetchMore', 'fetchTags', 'fetchLocations']),
    seeMore() {
      this.fetchMore(this.selectedCategory.id)
    }
  }
}
</script>

<style lang="scss" >
@import '../assets/styles/_variables.scss';

.hero {
  width: 100%;
  height: 60vh;
  min-height: 500px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 1.3;
  }

  .hero-content {
    max-width: 1000px;
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

.load-more-container {
  display: flex;
  justify-content: center;
}

@media (min-width: 769px) {
  .hero {
    background: url('../assets/desktop-hero-long.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media (max-width: 768px) {
  .hero {
    background: url('../assets/mobile-hero-long.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .hero-content {
    h1 {
      font-size: 2.5rem;
    }

    label {
      font-size: 1.6rem;
    }
  }
}
</style>
