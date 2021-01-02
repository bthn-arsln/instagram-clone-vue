<template>
	<div class="comment-list section">
		<div class="comment-header">
			<CustomText>6 yorumun tümünü gör</CustomText>
		</div>
		<CommentBody />
	</div>
</template>

<script>
import CustomText from '../CustomText'
import CommentBody from './CommentBody'

export default {
	name: 'CommentList',
	components: {
		CustomText,
		CommentBody
	}
}
</script>

<style lang="postcss" scoped>
.comment-list {
	& .comment-header {
		color: rgb(var(--f52));
		margin-top: 4px;
		margin-bottom: 4px;
	}
}
</style>
