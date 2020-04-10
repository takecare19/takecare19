<template>
  <div class="categories-list-frame">
    <div class="categories-list">
      <v-btn
        v-for="category in firstRow"
        :key="category.id"
        :color="category.name === 'Crisis' ? 'error' : 'primary'"
        :text="category.id !== selectedCategory.id"
        @click="selectCategory(category.id)"
        >{{ category.name }}</v-btn
      >
    </div>
    <div class="categories-list">
      <v-btn
        v-for="category in secondRow"
        :key="category.id"
        :color="category.name === 'Crisis' ? 'error' : 'primary'"
        :text="category.id !== selectedCategory.id"
        @click="selectCategory(category.id)"
        >{{ category.name }}</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CategoriesList',
  computed: {
    ...mapGetters(['allCategories', 'isLoading', 'error', 'selectedCategory']),
    firstRow: function() {
      return [...this.allCategories].splice(0, Math.ceil(this.allCategories.length / 2))
    },
    secondRow: function() {
      return [...this.allCategories].splice(
        Math.ceil(this.allCategories.length / 2),
        this.allCategories.length
      )
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    ...mapActions(['fetchCategories', 'selectCategory'])
  }
}
</script>

<style lang="scss">
.categories-list-frame {
  margin: 0 auto;
  overflow-x: scroll;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.categories-list {
  display: flex;
}

.categories-list + .categories-list {
  margin-top: 5px;
}

.categories-list .v-btn {
  border-radius: 5px;
}

@media (min-width: 768px) {
  .categories-list {
    margin: 0 auto;
  }
}
</style>
