<template>
  <div class="empty-message my-8">
    <img src="../assets/sadface.svg" alt="Sorry!" />
    <h3 class="my-6">Sorry, no resources found</h3>
    <p>Try choosing another category or filter</p>
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

@media (max-width: 768px) {
  p {
    font-size: 1.2rem;
  }
}
</style>