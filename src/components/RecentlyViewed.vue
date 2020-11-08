<template>
  <div class="rounded shadow-sm p-3">
    <h4 class="mb-3">Recently viewed</h4>
    <ul class="list-unstyled">
      <b-media tag="li" v-for="movie in movies" :key="movie.imdbID" class="mb-3">
        <template #aside>
          <b-img :src="movie.Poster" width="64" alt="placeholder"></b-img>
        </template>
        <h6 class="mt-0 mb-1">{{ movie.Title }}</h6>
        <p class="mb-0">
          <b-form-rating
              :value="movie.imdbRating / 2"
              readonly
              show-value
              show-value-max
              precision="2"
              variant="warning"
          ></b-form-rating>
        </p>
      </b-media>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecentlyViewed',
  computed: {
    movies() {
      return this.$store.getters['recentlyViewed/movies']
    }
  }
}
</script>

<style scoped>

</style>
