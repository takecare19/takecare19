<template>
  <router-view></router-view>
</template>

<script>
import { SET_USER } from '../../store/constants'
export default {
  beforeDestroy() {
    this.$store.commit(SET_USER, null)
  }
}
</script>