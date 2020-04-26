<template>
  <div class="resource-list">
    <EmptyMessage v-if="!hasResources && !isLoadingResources" />
    <ResourceCard v-for="resource in resources" :key="resource.id" :resource="resource" />
  </div>
</template>

<script>
import ResourceCard from './ResourceCard'
import EmptyMessage from '@/components/EmptyMessage'

import { mapGetters } from 'vuex'

export default {
  name: 'ResourceList',
  components: {
    ResourceCard,
    EmptyMessage
  },
  props: ['resources', 'category'],
  computed: {
    ...mapGetters(['isLoadingResources']),
    hasResources: function() {
      return (
        this.$props.category.id === 'All' ||
        this.$props.resources.some(resource => resource.categoryId === this.$props.category.id)
      )
    }
  }
}
</script>

<style lang="scss">
</style>
