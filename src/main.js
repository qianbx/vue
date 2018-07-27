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

//服务器请求URI通用前缀, 会匹配所有$http请求的url中"/_api"部分

const URI_PRIFIX = '/index.php/wechatapp'

$(document).ajaxSend((event, xhr, setting) => {
    //setting.crossDomain = true
    setting.url = setting.url
        .replace(/^\/\_api\/(.+)/, URI_PRIFIX + '/$1')

    
    
})


const store = createStore();
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});