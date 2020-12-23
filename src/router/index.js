import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/direct',
		name: 'Direct',
		component: () => import(/* webpackChunkName: "direct" */ '../views/direct')
	},
	{
		path: '/explore',
		name: 'Explore',
		component: () =>
			import(/* webpackChunkName: "explore" */ '../views/explore')
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () =>
			import(/* webpackChunkName: "profile" */ '../views/profile/'),
		children: [
			{
				path: '',
				name: 'Post',
				component: () =>
					import(/* webpackChunkName: "post" */ '../views/profile/post')
			},
			{
				path: 'igtv',
				name: 'IGTV',
				component: () =>
					import(/* webpackChunkName: "igtv" */ '../views/profile/igtv')
			},
			{
				path: 'save',
				name: 'Save',
				component: () =>
					import(/* webpackChunkName: "save" */ '../views/profile/save')
			},
			{
				path: 'tag',
				name: 'Tag',
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/profile/tag')
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
