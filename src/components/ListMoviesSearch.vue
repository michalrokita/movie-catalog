<template>
  <div role="group">
    <b-form-input
        type="search"
        placeholder="Search..."
        @input="throttledSearch"
    />
    <b-form-text>{{ totalResults }}</b-form-text>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import throttle from 'lodash.throttle'
export default {
  name: 'ListMoviesSearch',
  computed: {
    throttledSearch() {
      return throttle(this.search, 500)
    },
    totalResults() {
      const totalResults = this.$store.getters['movieCatalog/totalResults']

      return totalResults === 0 ? '' : `Total results: ${totalResults}`
    }
  },
  methods: {
    ...mapActions('movieCatalog', [
        'search'
    ])
  }
}
</script>
