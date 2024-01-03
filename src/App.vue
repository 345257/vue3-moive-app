<template>
  <CompHeader></CompHeader>
  <RouterView></RouterView>
</template>

<script>
  import CompHeader from './components/CompHeader.vue'

  export default {
    components: {
      CompHeader
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>