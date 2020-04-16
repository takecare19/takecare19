<template>
  <div>
    <AdminNav />
    <div class="wrapper">
      <h1 class="mb-5">Dashboard</h1>
    </div>
  </div>
</template>


<script>
import AdminNav from '@/components/AdminNav.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: { AdminNav },
  methods: {
    ...mapActions(['fetchResources'])
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
  }
}
</script>

<style lang="scss" scoped>
</style>


