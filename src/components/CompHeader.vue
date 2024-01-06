<template>
  <header>
    <CompLogo></CompLogo>
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" active-class="active" class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
  import CompLogo from './CompLogo.vue'

  export default {
    components: {
      CompLogo
    }, 
    data() {
      return {
        navigations: [
          {
            name: 'Search', 
            href: '/'
          }, 
          {
            name: 'Movie', 
            href: '/movie/tt4520988'
          }, 
          {
            name: 'About', 
            href: '/about'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo {
      margin-right: 40px;
    }
  }
</style>