<template>
  <b-row class="rounded shadow-sm p-3">
    <b-col sm="12">
      <b-button
          variant="primary"
          :to="{ name: 'movie-catalog' }"
      >
        <b-icon icon="arrow-left"></b-icon>
        Go back
      </b-button>
      <hr class="hr">
    </b-col>
    <b-col sm="12" md="7">
      <h4>{{ title }}</h4>
    </b-col>
    <b-col sm="12" md="5" class="mb-4">
      <b-form-rating
          v-model="rating"
          readonly
          show-value
          show-value-max
          precision="2"
          variant="warning"
      ></b-form-rating>
    </b-col>
    <b-col sm="4">
      <b-img :src="posterUrl" :rounded="true" alt="Poster" style="width: 100%;" />
    </b-col>
    <b-col sm="8">
      {{ plot }}
    </b-col>
  </b-row>
</template>

<script>
import MovieObjectMixin from '@/mixins/MovieObjectMixin'
export default {
  name: 'MovieView',
  mixins: [MovieObjectMixin],
  async beforeMount () {
    await this.fetchDetails(this.$route.params.id)
    await this.$store.dispatch('recentlyViewed/addToRecentlyViewed', this.details)
    this.loading = false
  },
  data: () => ({
    loading: true,
    details: {}
  }),
  methods: {
    async fetchDetails(id) {
      this.$imdbApi.setPlotType('full')
      this.details = await this.$imdbApi.findById(id)
    }
  }
}
</script>

<style scoped>

</style>
