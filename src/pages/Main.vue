<template>
  <Layout>
    <div id="homepage">
      <div class="hero">
        <div class="hero-content">
          <h1 class="mt-5">
            <span>
              Accessible & Inclusive Mental Health Resources for Coping Through COVID&#x2011;19
            </span>
          </h1>
        </div>
      </div>
      <div class="wrapper">
        <CategoriesListLoader v-if="isLoadingCategories" />
        <CategoriesList />
        <div class="flex mb-3 resource-title-container">
          <h2>Resources</h2>
          <FilterDialog />
        </div>
        <div class="helper mb-5 sort-by-text">Sorted by: Newest first</div>
        <ResourceList
          v-if="!isLoadingResources"
          :resources="allResources"
          :category="selectedCategory"
        />
        <ResourceCardLoader v-if="isLoadingResources || isLoadingMoreResources" />
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
import ResourceCardLoader from '@/components/ResourceCardLoader'
import CategoriesListLoader from '@/components/CategoriesListLoader'
import FilterDialog from '@/components/FilterDialog'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Main',
  components: {
    CategoriesList,
    ResourceList,
    Layout,
    ResourceCardLoader,
    CategoriesListLoader,
    FilterDialog
  },
  data() {
    return {
      showFilterDialog: false
    }
  },
  computed: {
    ...mapGetters([
      'allResources',
      'selectedCategory',
      'endOfResources',
      'isLoadingResources',
      'isLoadingMoreResources',
      'isLoadingCategories',
      'appliedTags',
      'appliedLocation',
      'allLocations'
    ])
  },
  created() {
    this.fetchResources()
    this.fetchTags()
    this.fetchLocations()
  },
  methods: {
    ...mapActions(['fetchResources', 'fetchMore', 'fetchTags', 'fetchLocations']),
    seeMore() {
      this.fetchMore({
        categoryId: this.selectedCategory.id,
        tags: this.appliedTags,
        location: this.appliedLocation
      })
    }
  }
}
</script>

<style lang="scss" >
@import '../assets/styles/_variables.scss';

.hero {
  width: 100%;
  height: 85vh;
  min-height: 400px;
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

#homepage {
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sort-by-text {
    font-size: 1.6rem;
  }
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

  #homepage .resource-title-container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
