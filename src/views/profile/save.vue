<template>
	<div class="save">
		<div class="save-container">
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/132688946_1303122583404150_5670549367058000418_n.jpg?_nc_ht=instagram.fsaw1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=OEF8nN1_kd8AX-vO7hX&tp=1&oh=55d689c1eafac6c3c13bdd617cb50caf&oe=6018ECC8"
						alt=""
					/>
				</figure>
			</div>
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/132034453_188105143022913_2995687179232666372_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=H49TgIvz-asAX-G3CfD&tp=1&oh=bc26af408d419a927beb331a7201e3cc&oe=60191FC8"
						alt=""
					/>
				</figure>
			</div>
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-7.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/129214579_382614609679190_1330936780083818036_n.jpg?_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ZGEFHosTLxUAX8yuotR&tp=1&oh=aed6a3b0567ff0ac7c0638521820670b&oe=5FF33208"
						alt=""
					/>
				</figure>
			</div>
		</div>
		<div class="save-container">
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/131893793_393141631914465_1409090140976431666_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=w-0KlwHJvqQAX9P7DCy&tp=1&oh=03344400ffcea721ab4320ee6d86c852&oe=601ACE59"
						alt=""
					/>
				</figure>
			</div>
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-7.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.280.720.720a/s640x640/130749872_676694139685922_4990309442826838341_n.jpg?_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=102&_nc_ohc=pKKa5i0SWNIAX90Eush&tp=1&oh=b5a1525bf578a8d9499791bba2a6c58c&oe=5FF32DD5"
						alt=""
					/>
				</figure>
			</div>
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.280.720.720a/s640x640/129738122_128982295511958_7342669465541681243_n.jpg?_nc_ht=instagram.fsaw1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=uYbCBHHt7acAX8HbYO-&tp=1&oh=34c39f2740fb106db89f8a24d867fc00&oe=5FF3088D"
						alt=""
					/>
				</figure>
			</div>
		</div>
		<div class="save-container">
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/e35/129749783_178703167313547_6974152047637416109_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=9XEV9It8aMwAX9Av4iT&tp=1&oh=c534f6da1db692327a2d5418c04eab76&oe=5FF32A6D"
						alt=""
					/>
				</figure>
			</div>
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-7.fna.fbcdn.net/v/t51.2885-15/e35/c0.210.540.540a/127616491_191897325867542_6554323315789145682_n.jpg?_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=102&_nc_ohc=OcM87rcUtnEAX-_X6NH&tp=1&oh=31e27a68a2ef966a7c9bd9a91d4344dd&oe=5FF37899"
						alt=""
					/>
				</figure>
			</div>
			<div class="save-preview">
				<figure class="save-image">
					<img
						src="https://instagram.fsaw1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.125.1000.1000a/s640x640/126617604_821643315301377_1746309672171960861_n.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sQ6UOHpdFIoAX_9rfto&tp=1&oh=ad0f1bd776e890de7e2ed2e48dc9a0ca&oe=601942C2"
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
	name: 'ProfileSave',
	component: { CustomText }
}
</script>

<style lang="postcss" scoped>
.save {
	display: flex;
	flex-direction: column;
	& .save-container {
		display: flex;
		margin-bottom: 4px;
		@media (--t) {
			display: flex;
			flex-direction: row;
			margin-bottom: 28px;
		}
		& .save-preview {
			margin-right: 4px;
			@media (--t) {
				margin-right: 28px;
				flex-grow: 1;
			}
			&:last-child {
				margin-right: 0;
			}
			& .save-image {
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
