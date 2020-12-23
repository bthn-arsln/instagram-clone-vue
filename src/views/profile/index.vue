<template>
	<div class="profile">
		<CustomText tag="h1">Profile</CustomText>
		<nav class="menu">
			<router-link to="/profile">Gönderiler</router-link> |
			<router-link to="/profile/igtv">IGTV</router-link> |
			<router-link to="/profile/save">Kaydedilenler</router-link> |
			<router-link to="/profile/tag">Etiketleneler</router-link>
		</nav>

		<router-view />
	</div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
	name: 'Profile',
	components: { CustomText }
}
</script>

<style lang="postcss" scoped></style>
