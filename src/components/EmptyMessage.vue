<template>
  <div class="empty-message my-8">
    <img src="../assets/sadface.svg" alt="Sorry!" />
    <h3 class="my-6">Sorry, no resources found</h3>
    <p>Try choosing another location or category</p>
  </div>
</template>

<script>
export default {
  name: 'EmptyMessage'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';

.empty-message {
  font-family: PT serif, serif;
  text-align: center;
  color: $grey;
}
</style>