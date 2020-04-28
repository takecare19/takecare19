<template>
  <div class="categories-loader mt-8 mb-0">
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
    <v-skeleton-loader class="ma-1" type="chip"></v-skeleton-loader>
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
    width: 1600px;
    overflow: hidden;

    .v-skeleton-loader__chip.v-skeleton-loader__bone {
      height: 20px;
    }
    .v-skeleton-loader:nth-child(3n) .v-skeleton-loader__chip.v-skeleton-loader__bone {
      width: 67px !important;
    }
  }
}
</style>