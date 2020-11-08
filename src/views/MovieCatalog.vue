<template>
  <b-row class="rounded shadow-sm p-3">
    <b-col sm="12" md="5">
      <h4>Movie catalog</h4>
    </b-col>
    <b-col sm="12" md="7">
      <list-movies-search />
    </b-col>
    <b-col sm="12">
      <list-movies></list-movies>
    </b-col>
  </b-row>
</template>

<script>
import ListMoviesSearch from '../components/ListMoviesSearch'
import ListMovies from '../components/ListMovies'
export default {
  name: 'MovieCatalog',
  components: {
    ListMoviesSearch,
    ListMovies
  }
}
</script>

<style scoped>

</style>
