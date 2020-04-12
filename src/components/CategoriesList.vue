<template>
  <div class="categories-list">
    <div class="categories-list-frame--desktop">
      <div class="categories-list">
        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
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
      <div class="categories-row">
        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
          v-for="category in firstRow"
          :key="category.id"
          :color="category.name === 'Crisis' ? 'error' : 'primary'"
          :text="category.id !== selectedCategory.id"
          @click="selectCategory(category.id)"
          >{{ category.name }}</v-btn
        >
      </div>
      <div class="categories-row">
        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
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
    ...mapGetters(['allCategories', 'isLoadingCategories', 'categoriesError', 'selectedCategory']),
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
.categories-list {
  margin: 25px 0;
}

.categories-list-frame--desktop {
  padding-bottom: 10px;

  .categories-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}

.categories-list-frame--mobile {
  padding-bottom: 10px;

  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  .categories-row {
    display: flex;
    flex-wrap: nowrap;
  }
}

.categories-row + .categories-row {
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
