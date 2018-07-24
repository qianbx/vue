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
	<div class="container-fluid">
    <!--<div class="row">
        <div class="col-xs-4 col-sm-3 col-md-1 bg-blue h">
            hello1
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-red h" style="padding: 0">
            hello2
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-blue h" style="padding: 0">
            hello3
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-red h" style="padding: 0">
            hello4
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-blue h" style="padding: 0">
            hello5
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-red h" style="padding: 0">
            hello6
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-blue h" style="padding: 0">
            hello7
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-red h" style="padding: 0">
            hello8
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-blue h" style="padding: 0">
            hello9
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-red h" style="padding: 0">
            hello10
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-blue h" style="padding: 0">
            hello11
        </div>
        <div class="col-xs-4 col-sm-3 col-md-1 bg-red h" style="padding: 0">
            hello12
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12" style="padding: 0">
            <img src="picture.jpg" style="width: 100%">
        </div>
    </div>-->
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