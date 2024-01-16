<template>
  <div class="about">
    <div class="photo">
      <CompLoader v-if="imageLoading" absolute></CompLoader>
      <img :src="image" :alt="name">
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>
      {{ email }}
    </div>
    <div>
      {{ phone }}
    </div>
  </div>
</template>

<script>
  import CompLoader from '@/components/CompLoader.vue'

  export default {
    components: {
      CompLoader
    }, 
    data() {
      return {
        imageLoading: true
      }
    }, 
    computed: {
      image() {
        return this.$store.state.about.image
      }, 
      name() {
        return this.$store.state.about.name
      }, 
      email() {
        return this.$store.state.about.email
      }, 
      phone() {
        return this.$store.state.about.phone
      }
    }, 
    mounted() {
      this.init()
    }, 
    methods: {
      async init() {
        await this.$loadImage(this.image)
        this.imageLoading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    text-align: center;
    .photo {
      width: 250px;
      height: 250px;
      margin: 40px auto 20px;
      padding: 30px;
      border: 10px solid $gray-300;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name {
      font-size: 40px;
      font-family: "Oswald", sans-serif;
      margin-bottom: 20px;
    }
  }
</style>