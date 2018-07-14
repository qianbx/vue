// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  Bootstrap from 'bootstrap'
//Vue.use(Bootstrap);

import {createStore} from './store/state.js'
Vue.config.productionTip = false;
const store = createStore();
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});