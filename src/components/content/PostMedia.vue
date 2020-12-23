<template>
	<div class="media">
		<img :src="source" alt="" />
	</div>
</template>

<script>
export default {
	name: 'PostMedia',
	props: ['source']
}
</script>

<style lang="scss" scoped></style>
