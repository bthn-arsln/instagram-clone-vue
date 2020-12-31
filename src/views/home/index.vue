<template>
	<div class="home">
		<div class="timeline">
			<div class="story-container">
				<div class="left arrow">
					<i class="fas fa-chevron-left"></i>
				</div>
				<div class="story">
					<Story
						:story="storylist"
						v-for="storylist in stories"
						:key="storylist"
					/>
				</div>
				<div class="right arrow">
					<i class="fas fa-chevron-right"></i>
				</div>
			</div>
			<article>
				<Post :postlist="post" v-for="post in posts" :key="post" />
			</article>
		</div>
		<div class="sidebar">
			<SidebarProfile />
			<Reccomended />
			<Footer />
		</div>
	</div>
</template>

<script>
import Post from '@/components/content/Post'
import Reccomended from '@/components/reccomended/Reccomended'
import SidebarProfile from '@/components/SidebarProfile'
import Footer from '@/components/Footer'
import Story from '../../components/Story'
import story from '@/story.json'
import post from '@/post.json'

export default {
	name: 'Home',
	components: {
		Post,
		Reccomended,
		SidebarProfile,
		Footer,
		Story
	},
	data() {
		return {
			stories: story,
			posts: post
		}
	}
}
</script>

<style lang="postcss" scope>
.home {
	max-width: 605px;
	margin-left: auto;
	margin-right: auto;
	@media (--t) {
		max-width: none;
		display: grid;
		grid-template-columns: 1fr 295px;
		grid-gap: 30px;
	}
}

.timeline {
	max-width: 614px;
}

.sidebar {
	display: none;
	@media (--t) {
		display: block;
		position: fixed;
		top: 88px;
		right: 0;
		left: 934.1px;
		width: 293px;
		padding-top: 16px;
		padding-bottom: 16px;
	}
}

.story-container {
	background: rgb(var(--d87));
	border: 1px solid rgb(var(--b6a));
	border-radius: 3px;
	padding: 16px 6px;
	position: relative;
	overflow-x: hidden;

	@media (--t) {
		margin-bottom: 24px;
		padding: 16px 12px;
	}
	& .story {
		display: flex;
	}
	& .arrow {
		background: rgb(var(--d87));
		top: 35%;
		border-radius: 999px;
		line-height: 24px;
		box-shadow: 0 0 4px black;
		width: 24px;
		height: 24px;
		text-align: center;
		position: absolute;
	}
	& .left {
		left: 8px;
		display: none;
	}
	& .right {
		right: 8px;
	}
}
</style>
