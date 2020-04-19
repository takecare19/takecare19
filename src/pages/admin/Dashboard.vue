<template>
  <div>
    <AdminNav />
    <div class="wrapper">
      <h1 class="mb-5">Admin Dashboard</h1>
      <CategoriesList />
      <ResourceList :resources="allResources" :category="selectedCategory" />
    </div>
  </div>
</template>


<script>
import AdminNav from '@/components/AdminNav'
import ResourceList from '@/components/ResourceList'
import CategoriesList from '@/components/CategoriesList'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: { AdminNav, ResourceList, CategoriesList },
  methods: {
    ...mapActions(['fetchResources', 'fetchTags', 'fetchLocations'])
  },
  computed: {
    ...mapGetters(['allResources', 'selectedCategory']),
    hasResources: function() {
      return (
        this.selectedCategory.id === 'All' ||
        this.allResources.some(resource => resource.categoryId === this.selectedCategory.id)
      )
    }
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


