<template>
  <b-row>
    <b-col sm="12">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <div class="mt-4">
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton width="55%" class="mt-3"></b-skeleton>
            <b-skeleton width="70%" class="mt-3"></b-skeleton>
          </div>
        </template>

        <list-movies-item
            v-for="movie in searchResults"
            :imdb-id="movie.imdbId"
            :title="movie.title"
            :type="movie.type"
            :year="movie.year"
            :poster-url="movie.posterUrl"
            :key="movie.imdbId"
        />

        <b-jumbotron
            v-if="searchResults.length === 0"
            class="mt-4"
        >
          <p style="text-align: center;">No results :-(</p>
        </b-jumbotron>
      </b-skeleton-wrapper>
    </b-col>
    <b-col sm="12">
      <list-movies-pagination></list-movies-pagination>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
import ListMoviesItem from './ListMoviesItem'
import ListMoviesPagination from '@/components/ListMoviesPagination'
export default {
  name: 'ListMovies',
  components: {
    ListMoviesItem,
    ListMoviesPagination
  },
  computed: {
    ...mapGetters('movieCatalog', [
      'searchResults',
      'loading'
    ])
  }
}
</script>

<style scoped>

</style>
