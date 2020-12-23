<template>
	<div class="action-buttons section">
		<button type="button">
			<IconLike />
		</button>
		<button type="button">
			<IconComment />
		</button>
		<button type="button">
			<IconDirect />
		</button>
		<button class="action-save" type="button">
			<IconSave />
		</button>
	</div>
</template>

<script>
import IconLike from '@/icons/like.svg'
import IconDirect from '@/icons/direct.svg'
import IconComment from '@/icons/comment.svg'
import IconSave from '@/icons/save.svg'

export default {
	name: 'ActionButton',
	components: {
		IconLike,
		IconDirect,
		IconComment,
		IconSave
	}
}
</script>

<style lang="postcss" scoped>
.action-buttons {
	display: flex;
	align-items: center;
	height: 45px;
	& button {
		margin-right: 16px;
	}
	& .action-save {
		margin-left: auto;
		margin-right: 0;
	}
}
</style>
