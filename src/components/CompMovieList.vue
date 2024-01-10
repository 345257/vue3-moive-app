<template>
  <div class="container">
    <div :class="{ 'no-result': !movies.length }" class="inner">
      <CompLoader v-if="loading"></CompLoader>
      <div v-if="message" class="message">
        {{ message }}
      </div>
      <div v-else class="movies">
        <CompMovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie"></CompMovieItem>
      </div>
    </div>
  </div>
</template>

<script>
  import CompMovieItem from './CompMovieItem.vue'
  import CompLoader from './CompLoader.vue'

  export default {
    components: {
      CompMovieItem, 
      CompLoader
    }, 
    computed: {
      movies() {
        return this.$store.state.movie.movies
      }, 
      message() {
        return this.$store.state.movie.message
      }, 
      loading() {
        return this.$store.state.movie.loading
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 30px;
    .inner {
      background-color: $gray-200;
      padding: 10px 0;
      border-radius: 4px;
      text-align: center;
      &.no-result {
        padding: 70px 0;
      }
    }
    .message {
      color: $gray-400;
      font-size: 20px;
    }
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>