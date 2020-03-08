import Vue from 'vue'
import Router from 'vue-router'

import Test from '../components/Test.vue'
import Test2 from '../components/Test2.vue'
import Index from '../components/Index.vue'
import Home from '../components/Home.vue'
import Content from '../components/Content.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Edit from '../components/Edit.vue'


Vue.use(Router)

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}


const routes = [
    { path: '/', name: 'home', component: Home},
    { path: '/content', name: 'content', component: Content},
    { path: '/index', name: 'index', component: Index},
    { path: '/test', name: 'test', component: Test},
    { path: '/test2', name: 'test2', component: Test2},
    { path: '/login', name: 'login', component: Login},
    { path: '/register', name: 'register', component: Register},
    { path: '/edit', name: 'edit', component: Edit},
]

const router = new Router({
    mode: 'history',
    routes,
})


export default router
