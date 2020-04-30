<template>
  <v-dialog scrollable v-model="showFilterDialog" width="80%">
    <template v-slot:activator="{ on }">
      <v-badge offset-x="10" offset-y="10" color="primary" :content="isApplied ? totalTags : '0'">
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
        <h2>Filter by Tags</h2>
      </v-card-title>
      <v-card-text height="80vh">
        <section>
          <h3 class="helper mt-10 mb-5">COST</h3>
          <v-btn
            class="filter-tag"
            :color="selectedCostTags.includes(tag.id) ? 'secondary' : 'default'"
            v-for="tag in costTags"
            :key="tag.id"
            @click="toggleTag(tag.id, tag.type)"
          >
            <v-icon small class="mr-1">
              {{ selectedCostTags.includes(tag.id) ? 'mdi-check' : 'mdi-plus' }}
            </v-icon>
            {{ tag.name }}
          </v-btn>
        </section>
        <section>
          <h3 class="helper mt-10 mb-5">FORMAT</h3>
          <v-btn
            class="filter-tag"
            :color="selectedFormatTags.includes(tag.id) ? 'secondary' : 'default'"
            v-for="tag in formatTags"
            :key="tag.id"
            @click="toggleTag(tag.id, tag.type)"
          >
            <v-icon small class="mr-1">
              {{ selectedFormatTags.includes(tag.id) ? 'mdi-check' : 'mdi-plus' }}
            </v-icon>
            {{ tag.name }}
          </v-btn>
        </section>
        <section>
          <h3 class="helper mt-10 mb-5">TOPIC</h3>
          <v-btn
            class="filter-tag"
            :color="selectedTopicTags.includes(tag.id) ? 'secondary' : 'default'"
            v-for="tag in topicTags"
            :key="tag.id"
            @click="toggleTag(tag.id, tag.type)"
          >
            <v-icon small class="mr-1">
              {{ selectedTopicTags.includes(tag.id) ? 'mdi-check' : 'mdi-plus' }}
            </v-icon>
            {{ tag.name }}
          </v-btn>
        </section>
        <section>
          <h3 class="helper mt-10 mb-5">AUDIENCE</h3>
          <v-btn
            class="filter-tag"
            :color="selectedAudienceTags.includes(tag.id) ? 'secondary' : 'default'"
            v-for="tag in audienceTags"
            :key="tag.id"
            @click="toggleTag(tag.id, tag.type)"
          >
            <v-icon small class="mr-1">
              {{ selectedAudienceTags.includes(tag.id) ? 'mdi-check' : 'mdi-plus' }}
            </v-icon>
            {{ tag.name }}
          </v-btn>
        </section>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="applyFilters" :disabled="!totalTags"
          >Apply {{ totalTags }} filter{{ totalTags !== 1 ? 's' : '' }}</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="clearTags">
          Clear filters
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
    ...mapGetters(['allTags', 'selectedCategory']),
    costTags() {
      return this.allTags.filter(tag => tag.type === 'cost')
    },
    audienceTags() {
      return this.allTags.filter(tag => tag.type === 'audience')
    },
    formatTags() {
      return this.allTags.filter(tag => tag.type === 'format')
    },
    topicTags() {
      return this.allTags.filter(tag => tag.type === 'topic')
    },
    totalTags() {
      return (
        this.selectedCostTags.length +
        this.selectedFormatTags.length +
        this.selectedTopicTags.length +
        this.selectedAudienceTags.length
      )
    }
  },
  data() {
    return {
      showFilterDialog: false,
      selectedCostTags: [],
      selectedFormatTags: [],
      selectedTopicTags: [],
      selectedAudienceTags: [],
      isApplied: false
    }
  },
  methods: {
    ...mapActions(['fetchResources']),
    clearTags() {
      this.selectedCostTags = []
      this.selectedAudienceTags = []
      this.selectedFormatTags = []
      this.selectedTopicTags = []
    },
    toggleTag(tag, type) {
      let selectedTags
      switch (type) {
        case 'cost':
          selectedTags = this.selectedCostTags
          break
        case 'audience':
          selectedTags = this.selectedAudienceTags
          break
        case 'format':
          selectedTags = this.selectedFormatTags
          break
        case 'topic':
          selectedTags = this.selectedTopicTags
          break
        default:
          break
      }
      if (selectedTags.includes(tag)) {
        selectedTags.splice(selectedTags.indexOf(tag), 1)
      } else {
        selectedTags.push(tag)
      }
    },
    applyFilters() {
      this.fetchResources({
        categoryId: this.selectedCategory.id,
        tags: [
          ...this.selectedTopicTags,
          ...this.selectedAudienceTags,
          ...this.selectedFormatTags,
          ...this.selectedCostTags
        ]
      })
      this.isApplied = true
      this.showFilterDialog = false
    }
  }
}
</script>

<style lang="scss">
.close-button {
  margin-left: auto;
}
#filter-dialog {
  .v-btn.filter-tag {
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 0 8px;
  }

  h2 {
    margin-top: -25px;
  }
}
</style>