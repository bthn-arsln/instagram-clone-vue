<template>
	<div class="reccomended-list">
		<router-link to="/profile" class="profile">
			<Avatar size="30" :src="profile.avatar" />
		</router-link>
		<div class="reccomended-list-text">
			<router-link to="/profile">
				<CustomText tag="b">{{ profile.name }}</CustomText>
			</router-link>
			<CustomText tag="p" size="small">{{ profile.status }}</CustomText>
		</div>
		<div class="reccomended-action">
			<button type="button">
				<CustomText tag="b" size="small">Takip Et</CustomText>
			</button>
		</div>
	</div>
</template>

<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'

export default {
	name: 'ReccomendedList',
	props: ['profile'],
	components: {
		Avatar,
		CustomText
	}
}
</script>

<style lang="postcss" scoped>
.reccomended-list {
	display: flex;
	align-items: center;
	padding-top: 6px;
	padding-bottom: 6px;
	& .profile {
		flex: 0 0 auto;
	}
	& .reccomended-list-text {
		margin-left: 12px;
		width: 170px;
		& p {
			color: rgb(var(--f52));
		}
	}

	& .reccomended-action {
		margin-left: auto;
		flex: 0 0 auto;
		& button {
			color: rgb(var(--d69));
		}
	}
}
</style>
