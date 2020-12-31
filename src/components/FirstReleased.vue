<template>
	<div class="first-released-info">
		<div class="avatar">
			<Avatar size="77" :src="image" />
		</div>
		<CustomText class="text" tag="b">MyMentor</CustomText>
	</div>
</template>

<script>
import Avatar from './Avatar'
import CustomText from './CustomText'
export default {
	name: 'FirstReleased',
	components: {
		Avatar,
		CustomText
	},
	data() {
		return {
			image:
				'https://instagram.fsaw1-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.280.720.720a/s150x150/73470590_139682310765319_2026301125000392742_n.jpg?_nc_ht=instagram.fsaw1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=jzVvV0JqpUcAX9v9Be-&tp=1&oh=817ea028214cc1bfc1c2facafb5d478e&oe=5FF06BDA'
		}
	}
}
</script>

<style lang="postcss" scoped>
.first-released-info {
	flex-grow: 0.1;
	display: flex;
	flex-direction: column;
	align-items: center;
	& .text {
		padding-top: 15px;
	}
}
</style>
