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
import Avatar from './Avatar'
import CustomText from './CustomText'

export default {
	name: 'Profile',
	components: {
		Avatar,
		CustomText
	},
	data() {
		return {
			image:
				'https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/67849459_2378171965772428_5792282402504048640_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_ohc=S3cBaKr03GwAX-wPfJf&tp=1&oh=3d4fa5833ae09182d488a647b6236c5f&oe=601C11BB'
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
