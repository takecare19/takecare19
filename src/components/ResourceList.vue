<template>
  <div>
    <ResourceCard v-for="resource in resources" :key="resource.id" :resource="resource" />
  </div>
</template>

<script>
import ResourceCard from "./ResourceCard";

export default {
  name: "ResourceList",
  components: {
    ResourceCard
  },
  props: {
    resources: Array
  }
};
</script>
