import Vue from 'vue';
import '../css/style.scss';

import Home from './pages/Home.vue';
import Article from './pages/Article.vue';
import AllCards from './pages/AllCards.vue';
import NotFound from './pages/404.vue';

import store from './store'

import VueRouter from 'vue-router';
Vue.use(VueRouter)

import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/article', component: Article },
    { path: '/404', component: NotFound },
    { path: "/wszystko", component: AllCards },
    { path: "*", component: NotFound },
  ]
})

new Vue({
  el: '#app',
  store,
  router,
  comments: {
    Home,
    Article,
    AllCards
  }
})
