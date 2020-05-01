<template>
  <v-dialog scrollable v-model="showFilterDialog" width="80%" @input="v => handleOpen()">
    <template v-slot:activator="{ on }">
      <v-badge
        offset-x="10"
        offset-y="10"
        color="primary"
        :content="appliedTags.length"
        :value="appliedTags.length"
      >
        <v-btn color="secondary" dark v-on="on">
          <v-icon class="small mr-1">mdi-filter</v-icon>
          Filters
        </v-btn>
      </v-badge>
    </template>
    <v-card id="filter-dialog">
      <v-btn class="close-button" icon @click="showFilterDialog = false">
        <v-icon large>mdi-close-circle</v-icon>
      </v-btn>
      <v-card-title>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text x-large v-on="on">
              Filter by {{ selectedFilterType }}
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(type, index) in filterTypes"
              :key="index"
              @click="setFilterType(type)"
            >
              <v-list-item-title>{{ type }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-card-text height="80vh">
        <section class="my-5">
          <v-btn
            class="filter-tag"
            :color="selectedTags.includes(tag.id) ? 'secondary' : 'default'"
            v-for="tag in selectedTypeTags"
            :key="tag.id"
            @click="toggleTag(tag.id)"
            :disabled="selectedTags.length >= 11 && !selectedTags.includes(tag.id)"
          >
            <v-icon small class="mr-1">
              {{ selectedTags.includes(tag.id) ? 'mdi-check' : 'mdi-plus' }}
            </v-icon>
            {{ tag.name }}
          </v-btn>
        </section>
        <strong v-if="selectedTags.length >= 11" class="error--text"
          >You can only choose up to 10 tags.</strong
        >
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="applyFilters" :disabled="selectedTags.length >= 11"
          >Apply {{ selectedTags.length }} filter{{ selectedTags.length !== 1 ? 's' : '' }}</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="clearTags" :disabled="!selectedTags.length">
          Clear all
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'FilterDialog',
  computed: {
    ...mapGetters(['allTags', 'selectedCategory', 'appliedTags']),
    selectedTypeTags() {
      return this.allTags.filter(tag => tag.type === this.selectedFilterType)
    }
  },
  data() {
    return {
      showFilterDialog: false,
      selectedTags: [],
      isApplied: false,
      selectedFilterType: 'cost',
      filterTypes: ['cost', 'format', 'audience', 'topic']
    }
  },
  methods: {
    ...mapActions(['fetchResources', 'setTags']),
    handleOpen() {
      this.selectedTags = [...this.appliedTags]
    },
    setFilterType(type) {
      this.selectedTags = []
      this.selectedFilterType = type
    },
    clearTags() {
      this.selectedTags = []
    },
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags.splice(this.selectedTags.indexOf(tag), 1)
      } else {
        this.selectedTags.push(tag)
      }
    },
    applyFilters() {
      this.setTags(this.selectedTags)
      this.fetchResources({
        categoryId: this.selectedCategory.id,
        tags: this.selectedTags
      })
      this.isApplied = true
      this.showFilterDialog = false
    }
  },
  destroyed() {
    this.setTags([])
  }
}
</script>

<style lang="scss">
#filter-dialog {
  .close-button {
    margin-left: auto;
  }
  .v-btn.filter-tag {
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 8px;
    padding: 0 8px;
  }

  label {
    font-size: 2.6rem;
    font-family: PT Serif, serif;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .error--text {
    font-size: 1.5rem;
  }
  .v-select {
    width: 200px;
    font-size: 2.6rem;
  }

  .v-select__selection {
    font-family: PT Serif, serif;
    font-weight: bold;
    height: 36px;
    overflow: visible;
    margin-bottom: -10px;
  }
  .v-btn.v-size--x-large {
    padding: 0px;
    .v-btn__content {
      font-family: PT serif, serif;
      font-weight: bold;
      letter-spacing: 0;
    }
  }
}

.v-btn.v-size--x-large {
  font-size: 2.6rem;
}
</style>