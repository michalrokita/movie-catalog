import OmdbApiWrapper from 'omdb-async-api-wrapper'

const api = new OmdbApiWrapper('ffd9d055')

const movieCatalog =  {
    namespaced: true,
    state: {
        searchResults: [],
        searchCollection: null,
        loading: false
    },
    mutations: {
        UPDATE_SEARCH_RESULTS: (state, payload) => {
            state.searchResults = payload
        },
        UPDATE_LOADING_STATE: (state, payload) => {
            state.loading = payload
        },
        UPDATE_SEARCH_COLLECTION: (state, payload) => {
            state.searchCollection = payload
        }
    },
    actions: {
        updateSearchResults({ commit }, payload) {
            commit('UPDATE_SEARCH_RESULTS', payload)
        },
        updateLoadingState({ commit }, state) {
            commit('UPDATE_LOADING_STATE', state)
        },
        updateSearchCollection({ commit }, payload) {
            commit('UPDATE_SEARCH_COLLECTION', payload)
        },
        async search({ dispatch }, payload) {
            let searchCollection = null
            let results = []

            dispatch('updateLoadingState', true)

            try {
                searchCollection = await api.searchByTitle(payload)
                results = searchCollection.results()
            } catch (error) {
                console.info(error)
            }

            dispatch('updateSearchCollection', searchCollection)
            dispatch('updateSearchResults', results)
            dispatch('updateLoadingState', false)
        },
        async changePage({ state, dispatch }, payload) {
            let results = []

            try {
                await state.searchCollection.page(payload)
                results = state.searchCollection.results()
            } catch (error) {
                console.info(error)
            }

            if (results.length !== 0) {
                dispatch('updateSearchResults', results)
            }
        }
    },
    getters: {
        searchResults: state => state.searchResults,
        loading: state => state.loading,
        totalResults: state => {
            if (state.searchCollection === null) {
                return 0
            }

            return state.searchCollection.totalResults()
        },
        perPage: state => {
            if (state.searchCollection === null) {
                return 1
            }

            return state.searchCollection.perPage()
        },
        currentPage: state => {
            if (state.searchCollection === null) {
                return 1
            }

            return 1 // state.searchCollection.currentPage()
        },
    }
}

export default movieCatalog
