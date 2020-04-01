<template>
  <div>
    <h1>Welcome to takecare</h1>
    <ResourceList :resources="this.resources" />
  </div>
</template>

<script>
import db from "../firebase/init";
import ResourceList from "@/components/ResourceList";

export default {
  name: "Main",
  components: { ResourceList },
  data() {
    return {
      resources: []
    };
  },
  created() {
    db.collection("resources")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.resources.push(doc.data());
          console.log(doc.data());
        });
      });
  }
};
</script>
