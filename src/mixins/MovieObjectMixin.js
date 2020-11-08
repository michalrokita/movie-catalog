export default {
    computed: {
        plot() {
            return this.loading ? '' : this.details.Plot
        },
        rating() {
            return this.loading ? '' : this.details.imdbRating / 2
        }
    }
}
