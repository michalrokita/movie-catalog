import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    supportCircular: true
})


export default new Vuex.Store({
    modules: {},
    strict: debug,
    plugins: [vuexLocal.plugin]
})
