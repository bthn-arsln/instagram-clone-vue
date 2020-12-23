<template>
	<div class="reccomended">
		<div class="reccomended-header">
			<CustomText tag="b">Senin İçin Öneriler</CustomText>
			<button type="button">
				<CustomText tag="b" size="small">Tümünü Gör</CustomText>
			</button>
		</div>
		<div class="reccomended-body">
			<ReccomendedList
				:profile="reccomended"
				v-for="reccomended in reccomendedlist"
				:key="reccomended"
			/>
		</div>
	</div>
</template>

<script>
import CustomText from '@/components/CustomText'
import ReccomendedList from './ReccomendedList'

export default {
	name: 'Reccomended',
	components: {
		CustomText,
		ReccomendedList
	},
	data() {
		return {
			reccomendedlist: [
				{
					name: 'yazlm_kod',
					status: 'muhendislik.dersleri.turkiye + 1 diğer kişi takip ediyor',
					avatar:
						'https://instagram.fist3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117315279_735159173720491_6805837826264985980_n.jpg?_nc_ht=instagram.fist3-1.fna.fbcdn.net&_nc_ohc=ylOftL7k6WMAX-lj_EI&tp=1&oh=956f179f5824d0fa3f1367ee55c52d3a&oe=5FF2C215'
				},
				{
					name: 'xq09px',
					status: 'muhendislik.dersleri.turkiye + 2 diğer kişi takip ediyor',
					avatar:
						'https://instagram.fist3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122011555_135302594966745_426485153245585248_n.jpg?_nc_ht=instagram.fist3-1.fna.fbcdn.net&_nc_ohc=sCreySL0P2wAX8ebgJS&tp=1&oh=e5675783668c67364c41a5c5bd04370d&oe=5FF224A3'
				},
				{
					name: 'matsumagic',
					status: 'masashi masuda'
				},
				{
					name: 'bushcraft25',
					status: 'BUSHCRAFT follows you',
					avatar:
						'https://instagram.fist3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106081553_278092656843430_2574678202257626692_n.jpg?_nc_ht=instagram.fist3-1.fna.fbcdn.net&_nc_ohc=-xgbPJpGm-YAX830vWY&tp=1&oh=197103c92f62d8a28b05cfce28b088ac&oe=5FF23E2A'
				},
				{
					name: 'code_dope',
					status: 'Code is Dope follows you',
					avatar:
						'https://instagram.fist3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50286408_298192304233273_827918125272924160_n.jpg?_nc_ht=instagram.fist3-1.fna.fbcdn.net&_nc_ohc=N7Go2-p9HowAX8kX9bV&tp=1&oh=0b6df975e5e12c75c816bfc622aff6f0&oe=5FF1B43A'
				}
			]
		}
	}
}
</script>

<style lang="postcss" scoped>
.reccomended {
	padding-left: 16px;
	padding-right: 16px;
	margin: 0 0 12px -16px;
	width: calc(100% + 32px);
	& .reccomended-header {
		color: rgb(var(--f52));
		display: flex;
		align-items: center;
		margin-top: 12px;
		padding-top: 8px;
		& button {
			margin-left: auto;
		}
	}
	& .reccomended-body {
		padding-top: 8px;
		padding-bottom: 8px;
	}
}
</style>
