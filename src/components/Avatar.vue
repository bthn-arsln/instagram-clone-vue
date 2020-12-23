<template>
	<figure class="avatar">
		<img :src="src" :alt="alt" :width="size" :height="size" />
	</figure>
</template>

<script>
export default {
	name: 'Avatar',
	props: {
		src: {
			type: String,
			default:
				'https://instagram.fjdh2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fjdh2-1.fna.fbcdn.net&_nc_ohc=KhY8BuG5Py4AX-P6VAj&oh=27e36b967c673b1507f97bb2de540aab&oe=5FF1288F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2'
		},
		alt: {
			type: String
		},
		size: {
			type: Number
		}
	}
}
</script>

<style lang="postcss" scoped>
.avatar {
	padding: 2px;
	border-radius: 999px;
	display: inline-flex;
	background: linear-gradient(
		219deg,
		rgba(184, 63, 148, 1) 0%,
		rgba(237, 158, 98, 1) 100%
	);
	& img {
		border-radius: inherit;
		border: 2px solid white;
	}
}
</style>
