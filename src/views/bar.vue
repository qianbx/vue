<template>
<div>
	<h5>我的是bar页面</h5>
	<p>我是foo.vue页面的count值:{{num}}</p>
	<div class="row">
	    <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
		<div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
	</div>
	<div class="row">
	    <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
	    <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
	    <!-- Optional: clear the XS cols if their content doesn't match in height -->
	    <div class="clearfix visible-xs-block"></div>
	    <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
	</div>

</div>
</template>
<script>

export default{
	data() {
		return {
		}
	},
	created() {
		console.log(this.$route)
		console.log(this.$routers)
	},
	computed:{
		num(){
			return this.$store.state.count
		}
	},
	methods: {
	}
}
</script>