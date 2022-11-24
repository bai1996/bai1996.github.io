<style>
	.my-vue-component{
		color:red;
	}
</style>

<template>
	<div class="my-vue-component">{{msg}}</div>
</template>

<!-- 范围内生效 -->
<script scoped>
	module.exports = {
		data:{
			msg:"hello！"
		}
	}
</script>

