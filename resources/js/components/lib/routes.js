import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import examplecomponent from '../ExampleComponent'
import LoginComponent from '../auth/LoginComponent'
import LandingComponent from '../LandingComponent'

const routes = [{
        path: '/',
        name: '/App/LandingComponent',
        component: LandingComponent,
    },
    {
        path: '/App/Login',
        name: 'LoginComponent',
        component: LoginComponent,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('loginStatus')) {
                next(from.path);
            }
            next();
        }
    },
    {
        path: '/App/example',
        name: 'examplecomponent',
        component: examplecomponent,
        meta: { requiresAuth: true }
    }

]

export default new VueRouter({
    routes, // short for `routes: routes`
    mode: "history"
});