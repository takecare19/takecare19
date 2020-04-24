<template>
  <Layout>
    <div class="wrapper">
      <h1>About</h1>
    </div>
  </Layout>
</template>


<script>
import Layout from '../components/Layout'
export default {
  name: 'About',
  components: { Layout },
  created() {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
</style>
