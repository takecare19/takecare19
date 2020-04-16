<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-autocomplete
      solo
      outlined
      v-model="category"
      :items="allCategories"
      label="Category"
      required
    />
    <v-text-field
      solo
      outlined
      v-model="name"
      label="Resource Name"
      required
      counter="60"
    ></v-text-field>
    <v-text-field
      solo
      outlined
      v-model="name"
      label="Provider organization/company"
      counter="40"
    ></v-text-field>
    <fieldset>
      <legend>Location</legend>
      <v-checkbox v-model="anywhere" label="Anywhere" />
      <v-checkbox v-model="showLocation" label="Specific Location" />
      <v-autocomplete
        v-if="showLocation"
        solo
        outlined
        v-model="location"
        :items="locations"
        label="Specific Location"
        required
      />
    </fieldset>
    <v-autocomplete
      v-model="tags"
      :items="items"
      solo
      outlined
      chips
      small-chips
      label="Tags"
      multiple
    ></v-autocomplete>
    <v-textarea v-model="description" solo outlined label="Description"></v-textarea>
    <v-text-field v-model="url" solo outlined label="URL"></v-text-field>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    showLocation: false,
    anywhere: true,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style lang="scss" scoped>
fieldset {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;

  legend {
    display: table;
  }
}
</style>