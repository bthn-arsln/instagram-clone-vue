<template>
	<div class="story-list">
		<div class="story-avatar">
			<Avatar size="58" :src="story.avatar" />
		</div>

		<CustomText class="story-author" tag="div" size="small">{{
			story.name
		}}</CustomText>
	</div>
</template>

<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'

export default {
	name: 'Story',
	props: ['story'],
	components: {
		Avatar,
		CustomText
	}
}
</script>

<style lang="postcss" scoped>
.story-list {
	display: flex;
	flex-direction: column;
	align-items: center;

	& .story-avatar {
		width: 80px;
		display: flex;
		justify-content: center;
	}

	& .story-author {
		line-height: 20px;
		max-width: 70px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
}
</style>
