<template>
  <div class="mt-4">
    <b-pagination
        v-if="totalResults > 0"
        v-model="currentPage"
        :total-rows="totalResults"
        :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ListMoviesPagination',
  computed: {
    ...mapGetters('movieCatalog', [
        'totalResults',
        'perPage'
    ]),
    currentPage: {
      get: function () {
        return this.$store.getters['movieCatalog/currentPage']
      },
      set: function (page) {
        this.$store.dispatch('movieCatalog/changePage', page)
      }
    }
  }

}
</script>

<style scoped>

</style>
