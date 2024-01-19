<template>
  <CompHeadline></CompHeadline>
  <CompSearch></CompSearch>
  <CompMovieList></CompMovieList>
</template>

<script>
  import CompHeadline from '../components/CompHeadline.vue'
  import CompSearch from '../components/CompSearch.vue'
  import CompMovieList from '../components/CompMovieList.vue';

  export default {
    components: {
      CompHeadline, 
      CompSearch, 
      CompMovieList
    },
    created() {
      this.$store.commit('movie/resetMovies')
    }
  }
</script>