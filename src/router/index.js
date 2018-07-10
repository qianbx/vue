import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
const Foo = { template: '<div>foo foo foo foo</div>' }
const Bar = { template: '<div>bar bar bar bar</div>' }
export default new Router({
	mode:'history',
	routes: [
	    {
	        path: '/',
	        name: 'home',
	        component: function(resolve) {
	            require(['../views/index.vue'], resolve)
	        },
	        children:[
	        	{ 
					name:'foo',
					path: '/foo', 
					// redirect:'/foos',
			    	components:{
						a:Foo,

					}
			    },
				{ 
					name:'bar',
					path: '/bar', 
					components:{
						default:Bar
					}
				}
	        ]
	    },
	    { 
	    	path: '/foos', 
	    	name:'foos',
	    	component: function(resolve){
	    		require(['../views/foo.vue'],resolve)
	    	} 
	    },
		{ 
			path: '/bars', 
			name:'bars',
			component:function(resolve){
				require(['../views/bar.vue'],resolve)
			}
		}
	]
})
