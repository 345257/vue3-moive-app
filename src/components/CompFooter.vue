<template>
  <footer>
    <CompLogo></CompLogo>
    <a href="https://github.com/345257/vue3-moive-app" target="_blank">
      (c){{ new Date().getFullYear() }} 345257ß
    </a>
  </footer>
</template>

<script>
  import CompLogo from './CompLogo.vue'

  export default {
    components: {
      CompLogo
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    padding: 70px 0;
    text-align:  center;
    opacity: 0.3;
    .logo {
      display: block;
      margin-bottom: 4px;
    }
  }
</style>