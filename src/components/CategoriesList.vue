<template>
  <div>
    <div class="categories-list-frame--desktop">
      <div class="categories-list">
        <v-btn
          v-for="category in allCategories"
          :key="category.id"
          :color="category.name === 'Crisis' ? 'error' : 'primary'"
          :text="category.id !== selectedCategory.id"
          @click="selectCategory(category.id)"
          >{{ category.name }}</v-btn
        >
      </div>
    </div>
    <div class="categories-list-frame--mobile">
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
.categories-list-frame--desktop {
  margin: 0 auto;
  width: 90%;
  max-width: 1100px;
  .categories-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}

.categories-list-frame--mobile {
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .categories-list {
    display: flex;
    flex-wrap: nowrap;
  }
}

.categories-list + .categories-list {
  margin-top: 5px;
}

.categories-list .v-btn {
  border-radius: 5px;
}

@media (max-width: 768px) {
  .categories-list-frame--mobile {
    display: flex;
  }
  .categories-list-frame--desktop {
    display: none;
  }
}

@media (min-width: 769px) {
  .categories-list-frame--mobile {
    display: none;
  }
  .categories-list-frame--desktop {
    display: block;
  }
}
</style>
