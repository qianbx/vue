<template>
<div>
	<h5>我是foo页面,下面是state用法</h5>
	<P>显示的数值为：{{num}}</p>
	<button @click="addNum">增加1按钮</button>
	<button @click="reduce">减1按钮</button>
</div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	computed:{
		num(){
			return this.$store.state.count
		}
		
	},
	methods:{
		addNum(){
			//this.$store.commit('increment',10)
			this.$store.dispatch('increments')
		},
		reduce(){
			this.$store.commit('reduce', 3)
		}
	}
}
</script>