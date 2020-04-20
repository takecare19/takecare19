<template>
  <v-form ref="form" v-model="valid" :lazy-validation="false" @submit="handleSubmit">
    <label class="required" for="category">Category</label>
    <v-autocomplete
      id="category"
      v-model="categoryId"
      :items="allCategories.filter(category => category.id !== 'All')"
      item-text="name"
      item-value="id"
      class="mb-5 small"
      solo
      outlined
      :rules="[v => !!v || 'Category is required']"
    />
    <label class="required" for="resource-name">Resource Name</label>
    <v-text-field
      id="resource-name"
      class="mb-5 small"
      solo
      outlined
      v-model="name"
      :rules="[
        v => !!v || 'Resource name is required',
        v => (v && v.length <= 60) || 'Must be less than 60 characters'
      ]"
      counter="60"
    ></v-text-field>
    <label for="company">Provider organization/company</label>
    <p class="helper">e.g., Association of Psychotherapy, Headspace</p>
    <v-text-field
      id="company"
      class="mb-5 small"
      solo
      outlined
      v-model="company"
      :rules="[v => (v && v.length <= 60) || 'Must be less than 60 characters']"
      counter="60"
    ></v-text-field>
    <fieldset class="mb-5">
      <legend class="required">Location</legend>
      <p class="helper">
        i.e. where does the audience need to be for the resource? Choose “anywhere” if it’s remote
        and doesn’t matter; choose a location if the resource is only applicable to someone in a
        certain place. Choose “anywhere” plus a location if it can be enjoyed from anywhere, but
        also has a location-specific option
      </p>
      <v-checkbox
        v-model="anywhere"
        label="Anywhere (this resource is relevant for anyone anywhere; location is not important)"
      />
      <v-checkbox v-model="showLocation" label="Location-specific" />
      <div v-if="showLocation">
        <p class="helper required">City or country</p>
        <v-autocomplete
          class="small"
          solo
          outlined
          v-model="location"
          :items="allLocations.filter(location => location.name !== 'Anywhere')"
          :rules="showLocation ? [v => !!v || 'Location is required'] : null"
          item-text="name"
          item-value="id"
          required
        />
      </div>
    </fieldset>
    <label for="description" class="required">Description</label>
    <p class="helper">
      Write a brief summary and include key details like date(s), and time(s).
    </p>
    <v-textarea
      id="description"
      class="mb-5"
      v-model="description"
      counter="300"
      solo
      outlined
      :rules="[v => !!v || 'Description is required']"
    ></v-textarea>
    <label for="url" class="required">URL</label>
    <v-text-field
      v-model="url"
      class="small"
      solo
      outlined
      :rules="[v => !!v || 'URL is required']"
    ></v-text-field>
    <label for="tags" class="required">Tags</label>
    <p class="helper">
      Please select ~3-5 tags that are most relevant in describing this resource
    </p>
    <v-autocomplete
      id="tags"
      class="mb-5"
      v-model="tags"
      :items="allTags"
      item-text="name"
      return-object
      solo
      outlined
      chips
      multiple
      :rules="[
        v => !!v || 'Please enter at least one tag',
        v => (v && v.length <= 5) || 'Maximum five tags'
      ]"
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip v-bind="attrs" :input-value="selected" close @click:close="removeTag(item)">
          {{ item.name }}
        </v-chip>
      </template></v-autocomplete
    >
    <fieldset v-if="!exisitingResource">
      <label for="email">Anything else? </label>
      <p class="helper">
        Add any notes or your contact info in case follow-up is needed
      </p>
      <v-text-field
        v-model="email"
        class="small"
        :rules="
          email.length
            ? [v => (v && v.length && /.+@.+\..+/.test(v)) || 'Please enter a valid email']
            : []
        "
        solo
        outlined
      ></v-text-field>
    </fieldset>
    <v-btn :disabled="!(valid && isLocationValid)" color="primary" class="mr-4" type="submit">
      {{ exisitingResource ? 'Update resource' : 'Submit resource' }}
    </v-btn>
    <v-btn text @click="$router.go(-1)">Cancel</v-btn>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      categoryId: null,
      name: '',
      email: '',
      company: '',
      tags: null,
      url: '',
      description: '',
      showLocation: false,
      location: null,
      locationRules: [v => this.showLocation || v],
      anywhere: true,
      valid: false,

      select: null,
      checkbox: false
    }
  },
  computed: {
    ...mapGetters(['allCategories', 'allTags', 'allLocations']),
    isLocationValid() {
      return !!(this.location || this.anywhere)
    },
    exisitingResource() {
      const { id } = this.$route.params

      if (id) {
        return this.singleResource(id)
      }
      return null
    }
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchTags', 'fetchLocations']),
    removeTag(tag) {
      this.tags.splice(this.tags.indexOf(tag.id), 1)
      this.tags = [...this.tags]
    },
    handleSubmit(e) {
      e.preventDefault()
      const { anywhere, location, description, url, company, name, tags, categoryId } = this
      const newResource = {
        location: { anywhere, specific: location },
        description,
        url,
        company,
        name,
        tags: tags.sort((a, b) => a.order - b.order).map(tag => tag.id),
        categoryId
      }
      this.$emit('submit', newResource)
    }
  },
  created() {
    window.scrollTo(0, 0)
    this.fetchCategories()
    this.fetchTags()
    this.fetchLocations()
    if (this.exisitingResource) {
      this.categoryId = this.exisitingResource.categoryId || null
      this.name = this.exisitingResource.name || null
      this.company = this.exisitingResource.company || null
      this.tags = this.exisitingResource.tags.map(tag =>
        this.allTags.find(existingTag => tag === existingTag.id)
      )
      this.showLocation = this.exisitingResource.location.specific
      this.url = this.exisitingResource.url || null
      this.description = this.exisitingResource.description || null
      this.location = this.exisitingResource.location.specific || null
      this.anywhere = this.exisitingResource.location.anywhere || null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
fieldset {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;

  legend {
    display: table;
  }
}

.small {
  width: 60%;
}

.required {
  &::after {
    content: '*';
    color: red;
  }
}

.helper {
  color: $denim;
}

label,
legend {
  font-family: Poppins, sans-serif;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  font-size: 1.6rem;
}

@media (max-width: 768px) {
  .small {
    width: 100%;
  }
}
</style>