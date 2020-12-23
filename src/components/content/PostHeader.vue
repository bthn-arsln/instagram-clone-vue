<template>
	<header class="header section">
		<div class="header-author">
			<Avatar size="36" :src="post_header.avatar" />
			<div class="author-info">
				<div>
					<CustomText tag="b">{{ post_header.author }}</CustomText>
				</div>
				<div>
					<CustomText size="xsmall">{{ post_header.location }}</CustomText>
				</div>
			</div>
		</div>
		<div class="header-more">
			<button type="button">
				<IconMore />
			</button>
		</div>
	</header>
</template>

<script>
import Avatar from '@/components/Avatar'
import IconMore from '@/icons/more.svg'
import CustomText from '@/components/CustomText'

export default {
	name: 'PostHeader',
	props: ['post_header'],
	components: {
		Avatar,
		IconMore,
		CustomText
	}
}
</script>

<style lang="postcss" scoped>
.header {
	display: flex;
	align-items: center;
	height: 57px;
	& .header-author {
		display: flex;
		align-items: center;
		& .author-info {
			margin-left: 8px;
		}
	}
	& .header-more {
		margin-left: auto;
	}
}
</style>
