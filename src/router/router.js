import Vue from 'vue'
import Router from 'vue-router'

import Test from '../components/Test.vue'
import Test2 from '../components/Test2.vue'
import Index from '../components/Index.vue'
import Home from '../components/Home.vue'
import Content from '../components/Content.vue'
import Login from '../components/Login.vue'


Vue.use(Router)

const routes = [
    { path: '/', name: 'home', component: Home},
    { path: '/content', name: 'content', component: Content},
    { path: '/index', name: 'index', component: Index},
    { path: '/test', name: 'test', component: Test},
    { path: '/test2', name: 'test2', component: Test2},
    { path: '/login', name: 'login', component: Login},
]

const router = new Router({
    mode: 'history',
    routes,
})


export default router
