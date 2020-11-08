<template>
  <b-card no-body class="overflow-hidden card-movie mt-3">
    <b-row no-gutters>
      <b-col sm="3">
        <b-card-img
            :src="posterUrl"
            :alt="title"
            class="rounded-0"
        />
      </b-col>
      <b-col sm="9">
        <b-card-body>
          <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card>
                <b-skeleton width="85%"></b-skeleton>
                <b-skeleton width="55%"></b-skeleton>
                <b-skeleton width="70%"></b-skeleton>
              </b-card>
            </template>

            <b-row>
              <b-col lg="6">
                <h4
                    v-b-tooltip.hover
                    :title="title"
                >
                  {{ shortTitle }}
                </h4>
              </b-col>
              <b-col lg="6">
                <b-form-rating
                    v-model="rating"
                    readonly
                    show-value
                    show-value-max
                    precision="2"
                    variant="warning"
                ></b-form-rating>
              </b-col>
              <b-col sm="12" style="height: 120px;">
                <b-card-text>
                  {{ plot }}
                </b-card-text>
              </b-col>
              <b-col sm="12">
                <b-button
                    variant="primary"
                    :to="{ name: 'movie-view', params: { id: imdbId } }"
                    style="float: right;"
                >
                  More Info
                </b-button>
              </b-col>
            </b-row>

          </b-skeleton-wrapper>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import MovieObjectMixin from '@/mixins/MovieObjectMixin'
export default {
  name: 'ListMoviesItem',
  mixins: [MovieObjectMixin],
  async beforeMount () {
    await this.fetchDetails(this.imdbId)
    this.loading = false
  },
  props: {
    title: {
      type: String,
      required: true
    },
    imdbId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    posterUrl: {
      type: String,
      validator: (value) => {
        try {
          new URL(value)
          return true
        } catch (error) {
          return false
        }
      },
      required: true
    }
  },
  data: () => ({
    details: {},
    loading: true
  }),
  computed: {
    shortTitle() {
      return `${this.title.substring(0, 37)}${this.title.length > 37 ? '...' : ''}`
    }
  },
  methods: {
    async fetchDetails(id) {
      this.$imdbApi.setPlotType('short')
      this.details = await this.$imdbApi.findById(id)
    }
  }
}
</script>

<style scoped>
  .card-movie {
    height: 260px;
  }
</style>
