<template>
<div>
	<h5>我是foo页面,下面是state用法</h5>
	<P>显示的数值为：{{num}}</p>
	<button @click="addNum">增加1按钮</button>
	<button @click="reduce">减1按钮</button>
	<div class="title">
        <h5><span>{{datas.job_position}}</span><i v-if="datas.is_hot==1">急招</i></h5>
        <p v-if="datas.department!=''">所属部门：{{datas.department}}</p>
        <p v-if="datas.job_type!=''">工作类型：{{datas.job_type}}</p>
        <p v-if="datas.working_place!=''">工作地点：{{datas.working_place}}</p>
        <p v-if="datas.release_time!=''">发布时间：{{datas.release_time}}</p>
    </div>
</div>
</template>
<script>
export default{
	data(){
		return{
			datas:{}
		}
	},
	computed:{
		num(){
			return this.$store.state.count
		}
		
	},
	created(){
		this.getJoinus(11);
	},
	methods:{
		addNum(){
			//this.$store.commit('increment',10)
			this.$store.dispatch('increments')
		},
		reduce(){
			this.$store.commit('reduce', 3)
		},
		getJoinus(id){
	        var self=this;
	        $.get('/_api/region/webappIndexTopTheme?src=webapp',(d)=>{
	            if(d.code==0){
	                self.datas=d.data;
	            }
	        }) 
	    }
	}
}
</script>