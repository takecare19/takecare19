<template>
  <div class="categories-list-frame">
    <div class="categories-list">
      <v-btn flat depressed>All</v-btn>
      <v-btn flat text v-for="category in categories" :key="category.id">{{category.name}}</v-btn>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";

export default {
  name: "CategoriesList",
  data() {
    return {
      categories: []
    };
  },
  created() {
    db.collection("categories")
      .orderBy("order", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.categories.push(doc.data());
        });
      });
  }
};
</script>

<style lang="scss">
.categories-list {
  width: 80%;
  margin: 0 auto;
  overflow-x: scroll;
  display: flex;
  height: 50px;

  button {
    display: inline;
    float: left;
  }
}
</style>

