<template>
	<div class="profile">
		<ProfileHeader />
		<div class="first-released">
			<FirstReleased />
		</div>
		<nav class="menu">
			<router-link to="/profile">
				<CustomText size="small">gönderiler</CustomText>
			</router-link>

			<router-link to="/profile/igtv">
				<CustomText size="small">igtv</CustomText>
			</router-link>

			<router-link to="/profile/save">
				<CustomText size="small">kaydedilenler</CustomText>
			</router-link>

			<router-link to="/profile/tag">
				<CustomText size="small">etiketlenenler</CustomText>
			</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>
import ProfileHeader from '@/components/ProfileHeader'
import FirstReleased from '@/components/FirstReleased'
import CustomText from '@/components/CustomText'

export default {
	name: 'Profile',
	components: { ProfileHeader, FirstReleased, CustomText }
}
</script>

<style lang="postcss" scoped>
.first-released {
	display: flex;
	align-items: center;
	margin-bottom: 44px;
}
.menu {
	border-top: 1px solid rgb(var(--b38));
	text-align: center;
	letter-spacing: 1px;
	& a {
		margin-right: 60px;
		height: 52px;
		line-height: 52px;
		color: rgb(var(--f52));
		&:last-child {
			margin: 0;
		}
		& span {
			text-transform: uppercase;
		}
	}
}
</style>
