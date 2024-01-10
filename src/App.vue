<template>
  <CompHeader></CompHeader>
  <RouterView></RouterView>
  <CompFooter></CompFooter>
  <div class="dummy"></div>
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
  .dummy {
    color: $dummy;
    display: none;
  }
</style>