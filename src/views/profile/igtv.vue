<template>
	<div class="igtv">
		<div class="igtv-header">
			<CustomText tag="h2">Videolar</CustomText>
			<button class="upload">
				<div>
					<CustomText tag="b">Yükle</CustomText>
				</div>
			</button>
		</div>
		<div class="igtv-body">
			<router-link to="#" class="igtv-post-link">
				<div class="igtv-post">
					<div class="time">
						<CustomText>1:38</CustomText>
					</div>
					<div class="title">
						<CustomText tag="b">Minuet No:1</CustomText>
					</div>
				</div>
			</router-link>
			<router-link to="#" class="igtv-post-link">
				<div class="igtv-post2">
					<div class="time">
						<CustomText>2:15</CustomText>
					</div>
					<div class="title">
						<CustomText tag="b"
							>Ajda Pekkan - Kimler Geldi Kimler Geçti</CustomText
						>
					</div>
				</div>
			</router-link>
			<router-link to="#" class="igtv-post-link">
				<div class="igtv-post3">
					<div class="time">
						<CustomText>2:17</CustomText>
					</div>
					<div class="title">
						<CustomText tag="b">Despacito(Keman Kapağı)</CustomText>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import CustomText from '@/components/CustomText'
export default {
	name: 'ProfileIGTV',
	components: {
		CustomText
	}
}
</script>

<style lang="postcss" scoped>
.igtv {
	display: flex;
	flex-direction: column;
	& .igtv-header {
		color: rgb(var(--f52));
		display: flex;
		align-items: center;
		& h2 {
			margin-bottom: 16px;
		}
		& .upload {
			background: rgb(var(--d69));
			border: 1px solid transparent;
			border-radius: 4px;
			color: rgb(var(--eca));
			padding: 5px 9px;
			margin-bottom: 16px;
			margin-left: auto;
			cursor: pointer;
			& div {
				padding: 0 16px;
			}
		}
	}
	& .igtv-body {
		display: flex;
		margin-bottom: 28px;

		& .igtv-post-link {
			margin-right: 4px;
			color: #fff;
			width: 210px;
			max-height: 310px;
			&:last-child {
				margin-right: 0;
			}
			@media (--t) {
				margin-right: 28px;
				color: #fff;
				width: 210px;
				max-height: 310px;
				&:last-child {
					margin-right: 0;
				}
			}

			& .igtv-post {
				background-image: url('https://instagram.fsaw1-7.fna.fbcdn.net/v/t51.2885-15/e35/71895572_204846733879694_8238525042166073747_n.jpg?_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=102&_nc_ohc=dzMbo_uUl34AX-1hUVb&tp=1&oh=c1a4246e1e2e8ccde979a1332cf861d2&oe=5FF2C650');
				background-size: cover;
				background-position: center center;
				width: 100%;
				height: 100%;
				position: relative;
				& .time {
					padding: 12px;
					text-align: right;
					opacity: 0.8;
				}
				& .title {
					position: absolute;
					bottom: 0;
					padding: 12px;
					width: 100%;
					@media (--t) {
						position: absolute;
						bottom: 0;
						padding: 12px;
					}
					& b {
						font-size: 1.3em;
					}
				}
			}
			& .igtv-post2 {
				background-image: url('https://instagram.fsaw1-3.fna.fbcdn.net/v/t51.2885-15/e35/71186482_917174078660238_7650218350883659137_n.jpg?_nc_ht=instagram.fsaw1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=TFpACwZ6GmAAX9AGZ0k&tp=1&oh=cef633f1b9e8cf99a683d881571a3a85&oe=5FF2AD3F');
				background-size: cover;
				background-position: center center;
				width: 100%;
				height: 310px;
				position: relative;
				& .time {
					padding: 12px;
					text-align: right;
					opacity: 0.8;
				}
				& .title {
					position: absolute;
					bottom: 0;
					padding: 12px;
					width: 100%;
					@media (--t) {
						position: absolute;
						bottom: 0;
						padding: 12px;
					}
					& b {
						font-size: 1.3em;
					}
				}
			}
			& .igtv-post3 {
				background-image: url('https://instagram.fsaw1-1.fna.fbcdn.net/v/t51.2885-15/e35/69690143_1340499339440088_7305024709095021109_n.jpg?_nc_ht=instagram.fsaw1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=O1GpEjGEFowAX9PgIxB&tp=1&oh=0fbfd3b58abceafa4c5c80e7ebe55637&oe=5FF32607');
				background-size: cover;
				background-position: center center;
				width: 100%;
				height: 310px;
				position: relative;
				& .time {
					padding: 12px;
					text-align: right;
					opacity: 0.8;
				}
				& .title {
					position: absolute;
					bottom: 0;
					padding: 12px;
					width: 100%;
					@media (--t) {
						position: absolute;
						bottom: 0;
						padding: 12px;
					}
					& b {
						font-size: 1.3em;
					}
				}
			}
		}
	}
}
</style>
