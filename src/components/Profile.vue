<template>
	<div class="profile">
		<div class="profile-info">
			<Avatar size="56" :src="image" />
			<div class="profile-text">
				<CustomText tag="b">ars.bthn</CustomText>
				<CustomText tag="p">Batuhan Arslan</CustomText>
			</div>
		</div>
		<div class="profile-action">
			<button type="button">
				<CustomText size="small" tag="b">Geçiş Yap</CustomText>
			</button>
		</div>
	</div>
</template>

<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'

export default {
	name: 'Profile',
	components: {
		Avatar,
		CustomText
	},
	data() {
		return {
			image:
				'https://instagram.fbtz1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/67849459_2378171965772428_5792282402504048640_n.jpg?_nc_ht=instagram.fbtz1-2.fna.fbcdn.net&_nc_ohc=J_jz1pb8IxcAX_W41ax&tp=1&oh=2ce6f39fce7dfea24655604a30ccbc59&oe=5FF0903B'
		}
	}
}
</script>

<style lang="postcss" scoped>
.profile {
	display: flex;
	align-items: center;
	& .profile-info {
		display: flex;
		align-items: center;
	}

	& .profile-text {
		margin-left: 16px;
		& p {
			color: rgb(var(--f52));
		}
	}

	& .profile-action {
		margin-left: auto;
		& button {
			color: rgb(var(--d69));
		}
	}
}
</style>
