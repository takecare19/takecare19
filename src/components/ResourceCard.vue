<template>
  <div>
    <h3>{{this.resource.name}}</h3>
    <i>{{this.resource.description}}</i>
  </div>
</template>

<script>
export default {
  name: "ResourceCard",
  props: {
    resource: Object
  }
};
</script>
