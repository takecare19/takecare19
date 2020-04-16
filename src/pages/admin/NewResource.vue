<template>
  <div>
    <AdminNav />
    <div class="wrapper">
      <h1 class="mb-5">Add a new resource</h1>
      <ResourceForm />
    </div>
  </div>
</template>


<script>
import AdminNav from '@/components/AdminNav'
import ResourceForm from '@/components/ResourceForm'

export default {
  name: 'NewResource',
  components: { AdminNav, ResourceForm }
}
</script>
