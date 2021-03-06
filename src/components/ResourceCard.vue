<template>
  <v-card
    class="resource-card"
    :href="!isAdmin ? resource.url : ''"
    target="_blank"
    v-if="!hideCrisis"
  >
    <v-chip class="new-label" v-if="isNew">New</v-chip>
    <div class="resource-card-content">
      <h3>{{ resource.name }}</h3>
      <p class="category-location mt-1 mb-2">
        {{ getName(resource.categoryId, allCategories) }} |
        {{ resource.location.anywhere ? 'ANYWHERE' : null }}
        {{ resource.location.anywhere && resource.location.specific ? ' · ' : '' }}
        {{ getName(resource.location.specific, allLocations) }}
      </p>
      <ul class="resource-tag-list mb-2">
        <li class="tag" v-for="tag in resource.tags" :key="tag">
          <v-chip small class="mb-1">{{ getName(tag, allTags) }}</v-chip>
        </li>
      </ul>
      <p class="resource-description my-2">{{ resource.description }}</p>
      <v-divider></v-divider>
      <p class="company my-2">{{ resource.company }}</p>
      <p class="helper mb-0">
        <v-icon small class="mb-1">mdi-clock-outline</v-icon>
        {{ resource.created_at.toDate() | formatDate }}
      </p>
      <a v-if="isAdmin" class="mt-3 hyperlink" :href="resource.url">Go to link</a>
      <div class="admin-actions mt-5" v-if="isAdmin">
        <v-btn color="primary" :to="`/admin/edit/${resource.id}`">Edit</v-btn>
        <v-dialog v-model="showDialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn text color="error" dark v-on="on">
              Delete
            </v-btn>
          </template>
          <v-card>
            <strong style="font-size: 2.4rem;">Delete {{ resource.name }}?</strong>
            <v-card-actions class="mt-5">
              <v-btn color="error" @click="deleteResource(resource.id)">
                Delete
              </v-btn>
              <v-btn text @click="showDialog = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <v-icon large class="arrow">
      mdi-chevron-right
    </v-icon>
  </v-card>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ResourceCard',
  props: {
    resource: Object
  },
  data() {
    return {
      showDialog: false
    }
  },
  computed: {
    ...mapGetters(['selectedCategory', 'allTags', 'allLocations', 'user', 'allCategories']),
    isAdmin() {
      return !!this.user && this.$route.path.includes('admin')
    },
    hideCrisis() {
      return (
        this.selectedCategory.id === 'All' &&
        this.$props.resource.categoryId === 'ZNrUvRN4asfFk3FxpWh3'
      )
    },
    isNew() {
      const now = moment()
      const referenceDate = moment(this.$props.resource.created_at.toDate())
      const sevenDaysAgo = now
        .clone()
        .subtract(7, 'days')
        .startOf('day')

      return referenceDate.isAfter(sevenDaysAgo)
    }
  },

  methods: {
    ...mapActions(['deleteResource']),
    goToResource(url) {
      window.open(url, '_blank')
    },
    getName(itemId, list) {
      const matchingItem = list.find(listItem => listItem.id === itemId)
      return matchingItem ? matchingItem.name : ''
    }
  },
  filters: {
    formatDate: date => {
      if (!date) return ''
      const now = new Date()
      const differenceInDays = (now - date) / 1000 / 60 / 60 / 24
      if (differenceInDays < 7) {
        return `Added ${moment(date).fromNow()}`
      }

      return `Added on ${moment(date).format('MMMM Do YYYY')}`
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/styles/_variables.scss';

.resource-card {
  display: flex;
  padding-right: 5px;
  align-items: center;
  justify-content: space-between;

  &.v-card {
    border: 0.5px solid lightgray;
  }

  & + .resource-card {
    margin-top: 30px;
  }

  &-content {
    flex-grow: 1;
  }

  strong {
    font-size: 3rem;
  }

  .company {
    font-size: 1.4rem;
  }
}

.resource-card-content {
  width: calc(100% - 36px);
}

.hyperlink {
  color: $navy !important;
  text-decoration: underline !important;
  display: block;
}

.theme--light.v-icon.arrow {
  color: $denim;
  transform: translateX(10px);
}

.category-location {
  font-size: 1.6rem;
  margin: 10px 0 15px;
  color: $grey;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}

.new-label.v-chip.v-size--default {
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 0;
  background: $sunshine;
  color: white;
  font-size: 1.6rem;
  padding: 20px 15px;
  border-top-right-radius: 3px;
}

.resource-tag-list {
  display: flex;
  flex-wrap: wrap;

  .tag {
    font-family: Poppins, sans-serif;
    margin-right: 5px;

    .v-chip {
      background: $sky;
      border-radius: 1px;

      &:hover {
        background: $sky;
        opacity: 1;
      }

      &::before {
        background: $sky;
      }
    }
  }
}

.resource-description {
  white-space: pre-wrap;
}

@media (max-width: 768px) {
  .resource-description {
    width: 100%;
  }

  .category-location {
    font-size: 1.2rem;
  }

  .new-label.v-chip.v-size--default {
    font-size: 1.2rem;
    padding: 15px 10px;
  }
}
</style>