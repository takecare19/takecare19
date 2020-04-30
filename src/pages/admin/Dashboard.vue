<template>
  <div>
    <AdminNav />
    <div class="wrapper">
      <h1 class="mb-5">Admin Dashboard</h1>
      <CategoriesListLoader v-if="isLoadingCategories" />
      <CategoriesList />
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
</template>


<script>
import AdminNav from '@/components/AdminNav'
import ResourceList from '@/components/ResourceList'
import CategoriesList from '@/components/CategoriesList'
import ResourceCardLoader from '@/components/ResourceCardLoader'
import CategoriesListLoader from '@/components/CategoriesListLoader'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: { AdminNav, ResourceList, CategoriesList, ResourceCardLoader, CategoriesListLoader },
  methods: {
    ...mapActions(['fetchResources', 'fetchMore', 'fetchTags', 'fetchLocations']),
    seeMore() {
      this.fetchMore(this.selectedCategory.id)
    }
  },
  computed: {
    ...mapGetters([
      'allResources',
      'selectedCategory',
      'endOfResources',
      'isLoadingResources',
      'isLoadingMoreResources',
      'isLoadingCategories'
    ])
  },
  created() {
    this.fetchResources()
    this.fetchTags()
    this.fetchLocations()
  }
}
</script>

<style lang="scss" scoped>
</style>


