<template>
	<div class="post">
		<!-- Header -->
		<PostHeader :post_header="postlist" />
		<!-- Media -->
		<PostMedia :source="postlist.media" />
		<!-- Actions -->
		<ActionButtons />
		<!-- View Count -->
		<div class="view-count section">
			<CustomText tag="b">1.345 beğenme</CustomText>
		</div>
		<!-- content -->
		<PostContent :content="postlist" />

		<!-- Comment List -->
		<CommentList />
		<!-- DateTime-->
		<div class="datetime section">
			<CustomText size="xxsmall">16 SAAT ÖNCE</CustomText>
		</div>
		<!-- Comment Form -->
		<CommentForm />
	</div>
</template>

<script>
import CustomText from '../CustomText'
import CommentForm from '../comment/CommentForm'
import CommentList from '../comment/CommentList'
import PostHeader from './PostHeader'
import PostMedia from './PostMedia'
import ActionButtons from './ActionButtons'
import PostContent from './PostContent'

export default {
	name: 'Article',
	props: ['postlist'],
	components: {
		CustomText,
		CommentForm,
		CommentList,
		PostHeader,
		PostMedia,
		ActionButtons,
		PostContent
	}
}
</script>

<style lang="postcss" scoped>
.post {
	background: rgb(var(--d87));
	@media (--t) {
		border-radius: 3px;
		border: 1px solid rgb(var(--b6a));
		margin-bottom: 64px;
	}
}

.section {
	padding-left: 16px;
	padding-right: 16px;
}

.view-count {
	margin-bottom: 4px;
}

.datetime {
	color: rgb(var(--f52));
}
</style>
