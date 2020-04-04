<template>
  <div class="categories-list-frame">
    <div class="categories-list">
      <v-btn
        :text="'All' !== selectedCategory"
        :depressed="'All' === selectedCategory"
        @click="selectCategory('All')"
      >All</v-btn>
      <v-btn
        :text="category.id !== selectedCategory.id"
        :depressed="category.id === selectedCategory.id"
        v-for="category in allCategories"
        :key="category.id"
        @click="selectCategory(category.id)"
      >{{category.name}}</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CategoriesList",
  methods: {
    ...mapActions(["fetchCategories", "selectCategory"])
  },
  computed: mapGetters([
    "allCategories",
    "isLoading",
    "error",
    "selectedCategory"
  ]),
  created() {
    this.fetchCategories();
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
}
</style>

