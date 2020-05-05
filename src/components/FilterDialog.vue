<template>
  <v-dialog scrollable v-model="showFilterDialog" width="95%" @input="v => handleOpen()">
    <template v-slot:activator="{ on }">
      <v-badge
        offset-x="10"
        offset-y="10"
        color="primary"
        :content="allAppliedFilters"
        :value="allAppliedFilters > 0"
      >
        <v-btn color="secondary" dark v-on="on">
          <v-icon class="small mr-1">mdi-filter</v-icon>
          Filter
        </v-btn>
      </v-badge>
    </template>
    <v-card id="filter-dialog">
      <v-btn class="close-button" icon @click="showFilterDialog = false">
        <v-icon large>mdi-close-circle</v-icon>
      </v-btn>
      <v-card-text height="80vh">
        <section class="mb-12">
          <h2 class="my-3">Filter by location</h2>
          <p class="helper mb-4">Select one location</p>
          <v-btn
            class="filter-tag"
            :color="selectedLocation === location.id ? 'secondary' : 'default'"
            v-for="location in allLocations"
            :key="location.id"
            @click="toggleLocation(location)"
            :disabled="selectedLocation && !selectedLocation === location.id"
          >
            <v-icon small class="mr-1">
              {{ selectedLocation === location.id ? 'mdi-check' : 'mdi-plus' }}
            </v-icon>
            {{ location.name }}
          </v-btn>
        </section>
        <section class="my-5">
          <h2 class="mb-3">
            Filter by tags
          </h2>
          <p class="helper mb-3">Choose a group and any tag(s) within it</p>

          <v-tabs background-color="white">
            <v-tab v-for="(type, index) in filterTypes" :key="index" @click="setFilterType(type)">{{
              type
            }}</v-tab>
            <v-tab-item v-for="(type, index) in filterTypes" :key="index">
              <v-container>
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
              </v-container>
            </v-tab-item>
          </v-tabs>
        </section>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="applyFilters" :disabled="selectedTags.length >= 11"
          >Apply {{ allFilters }} filter{{ allFilters !== 1 ? 's' : '' }}</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="clearFilters" :disabled="allFilters === 0">
          <v-icon small>
            mdi-close
          </v-icon>
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
    ...mapGetters([
      'allTags',
      'selectedCategory',
      'appliedTags',
      'allLocations',
      'appliedLocation'
    ]),
    selectedTypeTags() {
      return this.allTags.filter(tag => tag.type === this.selectedFilterType)
    },
    allFilters() {
      const selectedLocation = this.selectedLocation ? 1 : 0
      return this.selectedTags.length + selectedLocation
    },
    allAppliedFilters() {
      const appliedLocation = this.appliedLocation ? 1 : 0
      return this.appliedTags.length + appliedLocation
    }
  },
  data() {
    return {
      showFilterDialog: false,
      selectedTags: [],
      selectedLocation: null,
      isApplied: false,
      selectedFilterType: 'cost',
      filterTypes: ['cost', 'format', 'audience', 'topic']
    }
  },

  methods: {
    ...mapActions(['fetchResources', 'setTags', 'setLocation']),
    handleOpen() {
      this.selectedTags = [...this.appliedTags]
    },
    setFilterType(type) {
      this.selectedTags = []
      this.selectedFilterType = type
    },
    clearFilters() {
      this.selectedLocation = null
      this.selectedTags = []
    },
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags.splice(this.selectedTags.indexOf(tag), 1)
      } else {
        this.selectedTags.push(tag)
      }
    },
    toggleLocation(location) {
      if (this.selectedLocation === location.id) {
        this.selectedLocation = null
      } else {
        this.selectedLocation = location.id
      }
    },
    applyFilters() {
      this.setTags(this.selectedTags)
      this.setLocation(this.selectedLocation)
      this.fetchResources({
        categoryId: this.selectedCategory.id,
        tags: this.selectedTags,
        location: this.selectedLocation
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
  .v-card__text {
    color: #333;
    line-height: 1;
  }
  .close-button {
    position: absolute;
    top: 20px;
    right: 25px;
  }
  .v-btn.filter-tag {
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 8px;
    padding: 0 8px;
    font-size: 1.4rem;
    font-weight: 400;
  }
  .v-card__text {
    padding: 0 10px 20px;
  }
  .v-card__title {
    padding: 16px 10px 10px;
  }
  .v-tab {
    min-width: 0;
    padding: 0 16px;
    font-size: 1.2rem;
    font-family: Poppins, sans-serif;
    text-transform: none;
  }
  .v-window-item .container {
    padding-left: 0;
    padding-right: 0;
  }
  .filter-by-button::before {
    background-color: #fff;
  }

  .v-input--radio-group .v-input__slot {
    padding: 0;
  }

  .underline {
    text-decoration: underline;
    margin-left: 0.6rem;
  }

  .error--text {
    font-size: 1.4rem;
    font-family: Poppins, sans-serif;
    display: block;
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

.v-dialog.v-dialog--scrollable {
  max-width: 750px;
}
.v-btn.v-size--x-large {
  font-size: 2.6rem;
}

@media (max-width: 768px) {
  #filter-dialog {
    .v-btn.v-size--x-large {
      font-size: 1.8rem;
    }

    .v-card__actions .v-btn {
      font-size: 1.2rem;
    }

    .v-slide-group__prev.v-slide-group__prev--disabled {
      display: none;
    }

    .error--text {
      font-size: 1.2;
    }

    h2 {
      font-size: 2.2rem;
    }

    .v-tab {
      padding: 0 10px;
      font-size: 1rem;
    }
  }
}
</style>

