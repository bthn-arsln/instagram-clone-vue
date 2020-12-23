<template>
	<div class="container">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Container'
}
</script>

<style lang="postcss" scoped>
.container {
	max-width: 948px;
	margin-left: auto;
	margin-right: auto;
}
</style>
