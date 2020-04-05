<template>
  <div>
    <h3>{{ this.resource.name }}</h3>
    <p>{{ this.resource.description }}</p>
    <a :href="this.resource.url">Go to link</a>
  </div>
</template>

<script>
export default {
  name: 'ResourceCard',
  props: {
    resource: Object
  }
}
</script>
