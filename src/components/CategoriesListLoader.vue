<template>
  <div class="categories-loader mt-8 mb-0">
    <v-skeleton-loader
      class="ma-1"
      type="chip"
      v-for="(chip, i) in new Array($vuetify.breakpoint.xsOnly ? 8 : 18)"
      :key="i"
    ></v-skeleton-loader>
  </div>
</template>

<style lang="scss">
.categories-loader {
  display: flex;
  flex-wrap: wrap;

  .v-skeleton-loader:nth-child(3n) .v-skeleton-loader__chip.v-skeleton-loader__bone {
    width: 150px !important;
  }
}

@media (max-width: 768px) {
  .categories-loader {
    .v-skeleton-loader__chip.v-skeleton-loader__bone {
      height: 20px;
    }
    .v-skeleton-loader:nth-child(3n) .v-skeleton-loader__chip.v-skeleton-loader__bone {
      width: 67px !important;
    }
  }
}
</style>