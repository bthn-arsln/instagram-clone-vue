<template>
	<div class="tag">
		<div class="tag-container">
			<div class="tag-preview">
				<figure class="tag-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/37365320_220585378660412_2682402879616057344_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=neHDaxxPcs8AX88BqtO&tp=1&oh=825d52a6281992bbf1c7b31c27b06f9e&oe=601B565D"
						alt=""
					/>
				</figure>
			</div>
		</div>
	</div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
	name: 'ProfileTag',
	component: { CustomText }
}
</script>

<style lang="postcss" scoped>
.tag {
	display: flex;
	flex-direction: column;
	& .tag-container {
		display: flex;
		margin-bottom: 4px;
		@media (--t) {
			display: flex;
			flex-direction: row;
			margin-bottom: 28px;
		}
		& .tag-preview {
			margin-right: 4px;
			@media (--t) {
				margin-right: 28px;
			}
			&:last-child {
				margin-right: 0;
			}
			& .tag-image {
				& img {
					width: 298px;
					max-height: 298px;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
