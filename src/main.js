// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//Vue.use(Bootstrap);
//import $ from 'jquery'
//import  Bootstrap from 'bootstrap'
import './assets/bootstrap.min.css';
//import './assets/bootstrap.min.js';

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