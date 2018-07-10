<template>
<h5>我的是bar页面</h5>
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
	methods: {
	}
}
</script>