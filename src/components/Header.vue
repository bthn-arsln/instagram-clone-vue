<template>
	<header class="header">
		<Container class="header-inner">
			<router-link to="/" class="logo">
				Instagram
			</router-link>

			<form class="search">
				<input type="text" placeholder="Search" />
			</form>

			<nav class="navigation">
				<router-link to="/">
					<IconHomeFill v-if="$route.name === 'Home'" />
					<IconHome v-else />
				</router-link>
				<router-link to="/direct">
					<IconDirectFill v-if="$route.name === 'Direct'" />
					<IconDirect v-else />
				</router-link>
				<router-link to="/explore">
					<IconExploreFill v-if="$route.name === 'Explore'" />
					<IconExplore v-else />
				</router-link>
				<router-link to="/profile">
					<Avatar
						size="26"
						src="https://instagram.fbtz1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/67849459_2378171965772428_5792282402504048640_n.jpg?_nc_ht=instagram.fbtz1-2.fna.fbcdn.net&_nc_ohc=J_jz1pb8IxcAX_W41ax&tp=1&oh=2ce6f39fce7dfea24655604a30ccbc59&oe=5FF0903B"
					/>
				</router-link>
			</nav>
		</Container>
	</header>
</template>

<script>
import IconHome from '@/icons/home.svg'
import IconHomeFill from '@/icons/home-fill.svg'
import IconDirect from '@/icons/direct.svg'
import IconDirectFill from '@/icons/direct-fill.svg'
import IconExplore from '@/icons/explore.svg'
import IconExploreFill from '@/icons/explore-fill.svg'
import Container from './Container.vue'
import Avatar from '@/components/Avatar'

export default {
	name: 'Header',
	components: {
		IconHome,
		IconHomeFill,
		IconDirect,
		IconDirectFill,
		IconExplore,
		IconExploreFill,
		Container,
		Avatar
	}
}
</script>

<style lang="postcss" scoped>
.header {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	border-bottom: 1px solid rgb(var(--b6a));
	background: rgb(var(--d87));
	z-index: 999;
}

.header-inner {
	height: var(--header-height);
	display: flex;
	align-items: center;
	justify-content: center;

	@media (--t) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
	}
}

.logo {
	font-size: 1.6rem;
	font-weight: bold;
}

.search {
	display: none;

	@media (--t) {
		display: block;
		text-align: center;

		& input {
			width: 215px;
			height: 28px;
			border: 1px solid rgb(var(--b6a));
			background: rgb(var(--b3f));
			border-radius: 4px;
			padding-left: 20px;
			padding-right: 20px;
		}
	}
}

.navigation {
	z-index: 90;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgb(var(--d87));
	border-top: 1px solid rgb(var(--b6a));
	height: 57px;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (--t) {
		height: auto;
		border: none;
		position: static;
		justify-content: flex-end;
		& a {
			margin-left: 20px;
		}
	}
}
</style>
