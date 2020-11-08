const recentlyViewed =  {
    namespaced: true,
    state: {
        movies: []
    },
    mutations: {
        DELETE_OLDEST_MOVIE: (state) => {
            state.movies.pop()
        },
        ADD_NEW_MOVIE: (state, payload) => {
            state.movies.unshift(payload)
        }
    },
    actions: {
        addToRecentlyViewed({ state, commit }, payload) {

            // Movie already added to the list
            if (state.movies.findIndex(movie => movie.imdbID === payload.imdbID) > -1) {
                return
            }

            if (state.movies.length >= 6) {
                commit('DELETE_OLDEST_MOVIE')
            }

            commit('ADD_NEW_MOVIE', payload)
        }
    },
    getters: {
        movies: state => state.movies
    }
}

export default recentlyViewed
