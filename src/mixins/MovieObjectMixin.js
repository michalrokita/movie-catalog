export default {
    computed: {
        plot() {
            return this.loading ? '' : this.details.Plot
        },
        rating() {
            return this.loading ? '' : this.details.imdbRating / 2
        },
        title() {
            return this.loading ? '' : this.details.Title
        },
        posterUrl() {
            return this.loading ? '' : this.details.Poster
        }
    }
}
