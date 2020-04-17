<template>
  <v-form ref="form" v-model="valid" :lazy-validation="false">
    <label class="required" for="category">Category</label>
    <v-autocomplete
      id="category"
      v-model="category"
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
        v => (v && v.length <= 60) || 'Resource name must be less than 60 characters'
      ]"
      counter="60"
    ></v-text-field>
    <label for="company">Provider organization/company</label>
    <p class="helper">e.g., Headspace</p>
    <v-text-field
      id="company"
      class="mb-5 small"
      solo
      outlined
      v-model="company"
      counter="40"
    ></v-text-field>
    <fieldset class="mb-5">
      <legend class="required">Location</legend>
      <p class="helper">
        Can the resource only be consumed from a specific location? Is the information only relevant
        to a specific location? Stick to countries and/or cities
      </p>
      <v-checkbox v-model="anywhere" label="Anywhere" />
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
    <label for="tags" class="required">Tags</label>
    <p class="helper">
      Select up to 5 tags to describe this resource in terms of cost, format, topic, etc.
    </p>
    <v-autocomplete
      id="tags"
      class="mb-5"
      v-model="tags"
      :items="allTags"
      item-text="name"
      item-value="id"
      solo
      outlined
      chips
      multiple
      :rules="[
        v => !!v || 'Please enter at least one tag',
        v => (v && !!v.length <= 5) || 'Location is required'
      ]"
    ></v-autocomplete>
    <label for="description">Description</label>
    <p class="helper">
      Ensure key information that would be most helpful for someone deciding if they're interested
      in this resource not otherwise covered (e.g., dates and times)
    </p>
    <v-textarea
      id="description"
      class="mb-5"
      v-model="description"
      counter="300"
      solo
      outlined
    ></v-textarea>
    <label for="url" class="required">URL</label>
    <v-text-field
      v-model="url"
      class="small"
      solo
      outlined
      :rules="[v => !!v || 'URL is required']"
    ></v-text-field>
    <label for="email">Email</label>
    <p class="helper">
      Leave your contact information if you'd like to be available for any follow-ups on this
      submission. Resources will be published without linking who submitted.
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
    <v-btn :disabled="!(valid && isLocationValid)" color="primary" class="mr-4">
      Submit resource
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    category: null,
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
  }),
  computed: {
    ...mapGetters(['allCategories', 'allTags', 'allLocations']),
    isLocationValid() {
      return !!(this.location || this.anywhere)
    }
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchTags', 'fetchLocations']),
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  },
  created() {
    this.fetchCategories()
    this.fetchTags()
    this.fetchLocations()
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