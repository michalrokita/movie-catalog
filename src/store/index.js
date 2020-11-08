import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import movieCatalog from './modules/movieCatalog'
import recentlyViewed from '@/store/modules/recentlyViewed'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    supportCircular: true,
    reducer: (state) => ({
        recentlyViewed: state.recentlyViewed
    })
})


export default new Vuex.Store({
    modules: {
        movieCatalog,
        recentlyViewed
    },
    strict: debug,
    plugins: [vuexLocal.plugin]
})
