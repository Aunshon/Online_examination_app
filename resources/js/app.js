require('./bootstrap');

import Vue from 'vue'
import router from './components/lib/routes'
import store from './components/lib/store/store'
import App from './components/App'

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App,
    },
    mounted() {
        if (localStorage.getItem('loginStatus')) {
            store.dispatch('auth/attempt');
        }
    }
});