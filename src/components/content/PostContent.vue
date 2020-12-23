<template>
	<div class="post-content section">
		<div class="content-author">
			<CustomText tag="b">{{ content.author }}</CustomText>
		</div>
		<div class="content">
			<CustomText>{{ content.content }}</CustomText>
		</div>
	</div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
	name: 'PostContent',
	props: ['content'],
	components: {
		CustomText
	}
}
</script>

<style lang="postcss" scoped>
.post-content {
	display: flex;
	align-items: center;
	& .content-author {
		margin-right: 5px;
	}
	& .content {
	}
}
</style>
