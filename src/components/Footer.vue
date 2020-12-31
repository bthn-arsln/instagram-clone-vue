<template>
	<div class="footer">
		<div class="nav">
			<ul>
				<CustomText tag="li" size="xsmall">Hakkında</CustomText>
				<CustomText tag="li" size="xsmall">Yardım</CustomText>
				<CustomText tag="li" size="xsmall">Basın</CustomText>
				<CustomText tag="li" size="xsmall">API</CustomText>
				<CustomText tag="li" size="xsmall">İş Fırsatları</CustomText>
				<CustomText tag="li" size="xsmall">Gizlilik</CustomText>
				<CustomText tag="li" size="xsmall">Koşullar</CustomText>
				<CustomText tag="li" size="xsmall">Konumlar</CustomText>
				<CustomText tag="li" size="xsmall">Başlıca Hesaplar</CustomText>
				<CustomText tag="li" size="xsmall">Konu Etiketleri</CustomText>
				<CustomText tag="li" size="xsmall">Dil</CustomText>
			</ul>
		</div>
		<div class="copyright">
			<CustomText size="xsmall">© 2020 INSTAGRAM FROM FACEBOOK</CustomText>
		</div>
	</div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
	name: 'Footer',
	components: {
		CustomText
	}
}
</script>

<style lang="postcss" scoped>
.footer {
	margin-top: 16px;
	& .nav {
		& ul {
			& li {
				color: rgb(var(--edc));
				display: inline-block;
				&::after {
					content: '\00B7';
					margin: 0 0.25em 0 0.25em;
				}
				&:last-child {
					&::after {
						content: none;
					}
				}
			}
		}
	}
	& .copyright {
		margin-top: 16px;
		color: rgb(var(--edc));
	}
}
</style>
