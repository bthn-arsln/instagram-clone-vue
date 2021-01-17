<template>
	<div class="post">
		<div class="post-container">
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/138952799_1567152563673896_8340682638733180308_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=errvqVFV-0gAX-RL4q9&tp=1&oh=8502b25c899bd6395bc9a8b555787262&oe=602E80FC"
						alt=""
					/>
				</figure>
			</div>
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-3.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/131904850_412667876827890_7875120877001790833_n.jpg?_nc_ht=instagram.fsaw1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NES6zCTX0K4AX-ywPKg&tp=1&oh=1e5f3807fbdbfe79831259d270d1fd30&oe=601A4244"
						alt=""
					/>
				</figure>
			</div>
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/131552438_232102868280080_7647853677036841820_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=PBtt-qhZaJMAX-vieEb&tp=1&oh=808f178c3ee13fbdf04a9dc38da36a6c&oe=6017CE48"
						alt=""
					/>
				</figure>
			</div>
		</div>
		<div class="post-container">
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-3.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125775395_388943848892010_7162065462947639769_n.jpg?_nc_ht=instagram.fsaw1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=HCAZPR0AnbwAX9-FuE_&tp=1&oh=ba6ddcda9acc6227f09a65814d50e2fb&oe=601810FC"
						alt=""
					/>
				</figure>
			</div>
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/119339539_743085709600971_7063181289488762932_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=f-VSKbdER8AAX_QUS9j&tp=1&oh=8245d685222ce0ca611d60e6fa9374b6&oe=60191F4D"
						alt=""
					/>
				</figure>
			</div>
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-7.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/126253786_1051017118674364_848478082131132453_n.jpg?_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=104&_nc_ohc=HdKj_3E6hLsAX_Cf0aH&tp=1&oh=21ec56ca076aedf99a9df4a55ec3db69&oe=6019838B"
						alt=""
					/>
				</figure>
			</div>
		</div>
		<div class="post-container">
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/104268842_270699994138359_2602706331599805602_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lvSEVng2GV4AX_vkTq3&tp=1&oh=279cb26229dfd3209f036bdb8bda98ae&oe=60199CC1"
						alt=""
					/>
				</figure>
			</div>
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/100973986_3206409919409969_3279155486270288162_n.jpg?_nc_ht=instagram.fsaw1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=mO96lrg75b8AX-uHeo5&tp=1&oh=458098ae3cd7f14a4db0c5e8385ebb1c&oe=6018B00E"
						alt=""
					/>
				</figure>
			</div>
			<div class="post-preview">
				<figure class="post-image">
					<img
						src="https://instagram.fsaw1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/97909011_675022736613840_221874989085591394_n.jpg?_nc_ht=instagram.fsaw1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=wR5ngoI5f2cAX_Aw6uI&tp=1&oh=b5286afe77691db7e3b28e0371a30ea8&oe=601A2ECE"
						alt=""
					/>
				</figure>
			</div>
		</div>
	</div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
	name: 'ProfilePost',
	component: { CustomText }
}
</script>

<style lang="postcss" scoped>
.post {
	display: flex;
	flex-direction: column;
	& .post-container {
		display: flex;
		margin-bottom: 4px;
		@media (--t) {
			display: flex;
			flex-direction: row;
			margin-bottom: 28px;
		}
		& .post-preview {
			margin-right: 4px;
			@media (--t) {
				margin-right: 28px;
			}
			&:last-child {
				margin-right: 0;
			}
			& .post-image {
				& img {
					width: 298px;
					max-height: 298px;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
