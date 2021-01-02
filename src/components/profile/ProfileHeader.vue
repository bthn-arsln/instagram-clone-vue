<template>
	<div class="profile-header">
		<div class="profile-avatar">
			<Avatar size="150" :src="image" />
		</div>
		<div class="profile-status">
			<div class="head">
				<CustomText tag="h2" class="username">ars.bthn</CustomText>
				<div class="edit-profile">
					<router-link to="#">
						<CustomText tag="b">Profili Düzenle</CustomText>
					</router-link>
				</div>
				<div class="settings">
					<button class="settings-button" type="button">
						<IconCog />
					</button>
				</div>
			</div>
			<div class="info">
				<div class="info-group">
					<router-link to="#">
						<CustomText class="post-number size" tag="b">38</CustomText>
						<CustomText class="text size">gönderi</CustomText>
					</router-link>
				</div>
				<div class="info-group">
					<router-link to="#">
						<CustomText class="follower-number size" tag="b">75</CustomText>
						<CustomText class="text size">takipçi</CustomText>
					</router-link>
				</div>
				<div class="info-group">
					<router-link to="#">
						<CustomText class="following-number size" tag="b">212</CustomText>
						<CustomText class="text size">takip</CustomText>
					</router-link>
				</div>
			</div>
			<div>
				<CustomText class="name size" tag="h1">Batuhan Arslan</CustomText>
			</div>
		</div>
	</div>
</template>

<script>
import Avatar from '../Avatar'
import IconCog from '@/icons/cog.svg'
import CustomText from '../CustomText'

export default {
	name: 'ProfileHeader',
	components: {
		Avatar,
		IconCog,
		CustomText
	},
	data() {
		return {
			image:
				'https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/67849459_2378171965772428_5792282402504048640_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_ohc=S3cBaKr03GwAX-wPfJf&tp=1&oh=2513e2d8a2b4aa2ca40298ba423bc2e8&oe=601C01C3'
		}
	}
}
</script>

<style lang="postcss" scoped>
.size {
	font-size: 1.2em;
}
.profile-header {
	display: flex;
	margin-bottom: 44px;
	& .profile-avatar {
		margin-right: 30px;
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}
	& .profile-status {
		flex-grow: 2;
		& .head {
			margin-bottom: 20px;
			display: flex;
			flex-shrink: 1;
			align-items: center;

			& .username {
				font-weight: lighter;
				font-size: 2em;
			}
			& .edit-profile {
				margin-left: 20px;
				border: 1px solid rgb(var(--ca6));
				background: transparent;
				padding: 5px 9px;
				border-radius: 4px;
			}
			& .settings {
				margin-left: 5px;
				display: flex;
				align-items: center;
				flex-shrink: 0;
				& .settings-button {
					padding: 8px;
				}
			}
		}
		& .info {
			display: flex;
			justify-content: stretch;
			margin-bottom: 20px;
			& .info-group {
				flex-grow: 0.1;
				& .post-number {
				}
				& .follower-number {
				}
				& .following-number {
				}
				& .text {
					margin-left: 5px;
				}
			}
		}
		& .name {
		}
	}
}
</style>
