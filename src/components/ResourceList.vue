<template>
  <div class="resource-list">
    <EmptyMessage v-if="!resources.length && !isLoadingResources" />
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
    ...mapGetters(['isLoadingResources'])
  }
}
</script>

<style lang="scss">
</style>
