<template>
  <div class="container">
    <div class="inner">
      <CompMovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie"></CompMovieItem>
    </div>
  </div>
</template>

<script>
  import CompMovieItem from './CompMovieItem.vue'

  export default {
    components: {
      CompMovieItem
    }, 
    computed: {
      movies() {
        return this.$store.state.movie.movies
      }
    }
  }
</script>