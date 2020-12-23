<template>
	<form class="comment-form section">
		<textarea
			rows="3"
			aria-label="Yorum ekle..."
			placeholder="Yorum ekle..."
			autocomplete="off"
			autocorrect="off"
			required
		>
		</textarea>
		<button type="submit">
			<CustomText tag="b">Paylaş</CustomText>
		</button>
	</form>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
	name: 'CommentForm',
	components: {
		CustomText
	}
}
</script>

<style lang="postcss" scoped>
.comment-form {
	border-top: 1px solid rgb(var(--ce3));
	margin-top: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 56px;
	&:invalid {
		& button {
			display: block;
			pointer-events: none;
			color: rgba(var(--d69), 0.3);
		}
	}
	&:valid {
		& button {
			display: block;
			pointer-events: inital;
			margin-left: auto;
			color: rgb(var(--d69));
		}
	}
	& textarea {
		outline: none;
		resize: none;
		flex-grow: 1;
		height: 20px;
		max-height: 80px;
		padding: 0;
		font-size: inherit;
		border: 0;
		margin-right: 10px;
	}
}
</style>
