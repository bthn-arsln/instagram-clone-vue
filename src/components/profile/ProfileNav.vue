<template>
	<nav class="menu">
		<router-link
			to="/profile"
			v-if="$route.name === 'Post'"
			class="active link"
		>
			<IconPostFill />
			<CustomText size="small" tag="b" class="text">gönderiler</CustomText>
		</router-link>
		<router-link to="/profile" class="passive link" v-else>
			<IconPost />
			<CustomText size="small" tag="b" class="text">gönderiler</CustomText>
		</router-link>

		<router-link
			to="/profile/igtv"
			class="active link"
			v-if="$route.name === 'IGTV'"
		>
			<IconChannelFill />
			<CustomText size="small" tag="b" class="text">igtv</CustomText>
		</router-link>
		<router-link to="/profile/igtv" class="passive link" v-else>
			<IconChannel />
			<CustomText size="small" tag="b" class="text">igtv</CustomText>
		</router-link>

		<router-link
			to="/profile/save"
			class="active link"
			v-if="$route.name === 'Save'"
		>
			<IconSavedFill />
			<CustomText size="small" tag="b" class="text">kaydedilenler</CustomText>
		</router-link>
		<router-link to="/profile/save" class="passive link" v-else>
			<IconSaved />
			<CustomText size="small" tag="b" class="text">kaydedilenler</CustomText>
		</router-link>

		<router-link
			to="/profile/tag"
			class="active link"
			v-if="$route.name === 'Tag'"
		>
			<IconTaggedFill />
			<CustomText size="small" tag="b" class="text">etiketlenenler</CustomText>
		</router-link>
		<router-link to="/profile/tag" class="passive link" v-else>
			<IconTagged />
			<CustomText size="small" tag="b" class="text">etiketlenenler</CustomText>
		</router-link>
	</nav>
</template>

<script>
import CustomText from '../CustomText'
import IconPost from '@/icons/post.svg'
import IconPostFill from '@/icons/postfill.svg'
import IconChannel from '@/icons/channel.svg'
import IconChannelFill from '@/icons/channelfill.svg'
import IconSaved from '@/icons/saved.svg'
import IconSavedFill from '@/icons/savedfill.svg'
import IconTagged from '@/icons/tagged.svg'
import IconTaggedFill from '@/icons/taggedfill.svg'

export default {
	name: 'ProfileNav',
	components: {
		CustomText,
		IconPost,
		IconPostFill,
		IconChannel,
		IconChannelFill,
		IconSaved,
		IconSavedFill,
		IconTagged,
		IconTaggedFill
	}
}
</script>

<style lang="postcss">
.menu {
	display: flex;
	justify-content: space-around;
	border-top: 1px solid rgb(var(--b38));
	border-bottom: 1px solid rgb(var(--b38));
	@media (--t) {
		border-top: 1px solid rgb(var(--b38));
		display: flex;
		justify-content: center;
		letter-spacing: 1px;
		border-bottom: none;
	}
	& .active {
		border-top: 1px solid;
	}
	& .passive {
		color: rgb(var(--f52));
	}
	& .link {
		height: 52px;
		display: flex;
		align-items: center;

		@media (--t) {
			margin-right: 60px;
			height: 52px;
			display: flex;
			align-items: center;
		}

		&:last-child {
			margin: 0;
		}
		& svg {
			height: 25px;
			width: 25px;
			@media (--t) {
				height: 12px;
				width: 12px;
			}
		}
		& .text {
			display: none;
			@media (--t) {
				display: block;
				text-transform: uppercase;
				margin-left: 6px;
			}
		}
	}
}
</style>
