module.exports = {
	plugins: {
		'postcss-nesting': {},
		'postcss-custom-media': {
			importFrom: [
				{
					customMedia: { '--t': '(min-width: 980px)' }
				},
				{
					customMedia: { '--d': '(min-width: 1270)' }
				}
			]
		}
	}
}
