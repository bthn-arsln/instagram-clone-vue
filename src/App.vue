<template>
	<div class="app">
		<MasterHeader />
		<main>
			<Container>
				<router-view class="main" />
			</Container>
		</main>
	</div>
</template>

<script>
import MasterHeader from '@/components/Header'
import Container from '@/components/Container'

export default {
	name: 'App',
	components: {
		MasterHeader,
		Container
	}
}
</script>

<style lang="postcss" scope>
.main {
	padding: none;
	@media (--t) {
		padding-top: 32px;
	}
}
</style>
