<template>
  <div>
    <AdminNav />
    <div class="wrapper">
      <h1 class="mb-5">Add a new resource</h1>
      <ResourceForm @submit="handleSubmit" />
    </div>
  </div>
</template>


<script>
import AdminNav from '@/components/AdminNav'
import ResourceForm from '@/components/ResourceForm'
import { mapActions } from 'vuex'

export default {
  name: 'NewResource',
  components: { AdminNav, ResourceForm },
  methods: {
    ...mapActions(['postResource']),
    handleSubmit(resource) {
      resource.approved = true
      resource.created_at = new Date()
      resource.updated_at = new Date()
      resource.published_at = new Date()
      this.postResource(resource)
    }
  }
}
</script>
