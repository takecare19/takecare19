<template>
  <div>
    <AdminNav />
    <div class="wrapper">
      <h1 class="mb-5">Edit resource</h1>
      <ResourceForm @submit="handleSubmit" />
    </div>
  </div>
</template>


<script>
import AdminNav from '@/components/AdminNav'
import ResourceForm from '@/components/ResourceForm'
import { mapActions } from 'vuex'

export default {
  name: 'EditResource',
  components: { AdminNav, ResourceForm },
  methods: {
    ...mapActions(['updateResource', 'fetchSingleResource']),
    handleSubmit(resource) {
      resource.approved = true
      resource.updated_at = new Date()
      this.updateResource({ id: this.$route.params.id, resource })
    }
  }
}
</script>
