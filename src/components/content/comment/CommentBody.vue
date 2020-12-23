<template>
	<div class="comment-body">
		<div class="comment-author">
			<CustomText tag="b">waldfee_christine</CustomText>
		</div>
		<div class="comment-content">
			<CustomText>Nice</CustomText>
		</div>
		<div class="comment-like">
			<IconCommentLike />
		</div>
	</div>
</template>

<script>
import IconCommentLike from '@/icons/comment-like.svg'
import CustomText from '@/components/CustomText'

export default {
	name: 'CommentBody',
	components: {
		IconCommentLike,
		CustomText
	}
}
</script>

<style lang="postcss" scoped>
.comment-body {
	display: flex;
	align-items: center;
	margin-top: 4px;
	& .comment-content {
		margin-left: 8px;
	}
	& .comment-like {
		margin-left: auto;
	}
}
</style>
