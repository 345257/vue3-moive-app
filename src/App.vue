<template>
  <CompHeader></CompHeader>
  <RouterView></RouterView>
  <CompFooter></CompFooter>
</template>

<script>
  import CompHeader from './components/CompHeader.vue'
  import CompFooter from './components/CompFooter.vue'

  export default {
    components: {
      CompHeader, 
      CompFooter
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>