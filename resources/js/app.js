/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')
import VueRouter from 'vue-router'
import Main from './components/Main'
import Home from './components/Home'
import Login from './components/Login'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    router,
    ...Main
}).$mount('#app')
