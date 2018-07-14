import Vue from 'vue'
import Vuex from 'vuex'
import { userInfo } from 'os';
Vue.use(Vuex)
export function createStore(){
    return new Vuex.Store({
        state:{
            count:1,
        },
        mutations:{
            increment(state ,n){
                state.count+=n
            },
            reduce(state, n){
                state.count-=n
            }
        },
        actions:{
            increments({commit}){
               commit('increment',2)
            }
        }
    })
}