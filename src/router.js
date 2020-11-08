import MovieView from '@/views/MovieView'
import Vue from 'vue'
import Router from 'vue-router'
import MovieCatalog from './views/MovieCatalog'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'active',
    mode: 'history',
    base: '',
    routes: [
        {
            path: '/',
            name: 'movie-catalog',
            component: MovieCatalog
        },
        {
            path: '/movie/:id',
            name: 'movie-view',
            component: MovieView
        }
    ]
})
