<template>
<div>
	<router-link to="/foos">Go to 页面 Foo</router-link><br>
	<router-link to="/bars">Go to 页面 Bar</router-link>
	<h1>Hello App!{{num}}</h1>
	<p>
		<router-link to="/">Go to home</router-link>
	    <router-link to="/foo">Go to Foo</router-link>
	    <router-link to="/bar">Go to Bar</router-link>
	</p>
	
	<transition><router-view style="background:#999; height:400px;"></router-view></transition>
	<transition name="fade" mode="out-in"><router-view name="a" style="background:#ff5a5f; height:400px;"></router-view></transition>
</div>
</template>
<script>
	import foo from '../components/foo.vue'
	export default{
		data(){
			return {
				num:11,
				transitionName: 'slide-left'
			}
		},
		created(){
		},
		beforeRouteUpdate (to, from, next) {
			next(vm => {
				// 通过 `vm` 访问组件实例
				this.num=19
				console.log(this.num)
			})
		},
		watch:{
			'$route'(to,from){
				// console.log(to)
				//console.log(from)
				this.transitionName = 'slide-right'
			},
			
		},
		
		methods:{

		},
		component:{
			foo
		}
	}
</script>