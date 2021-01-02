<template>
	<div class="profile">
		<ProfileHeader />
		<div class="first-released">
			<FirstReleased />
		</div>
		<ProfileNav />
		<router-view />
	</div>
</template>

<script>
import ProfileHeader from '@/components/profile/ProfileHeader'
import FirstReleased from '@/components/profile/FirstReleased'
import ProfileNav from '@/components/profile/ProfileNav'

export default {
	name: 'Profile',
	components: {
		ProfileHeader,
		FirstReleased,
		ProfileNav
	}
}
</script>

<style lang="postcss" scoped>
.first-released {
	display: flex;
	align-items: center;
	margin-bottom: 44px;
}
</style>
