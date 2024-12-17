import { CleanLayout } from '@/app/layouts'
import { AppRoutes } from './types.ts'

export const routes = [
	{
		path: AppRoutes.HOME,
		name: 'home',
		component: () => import('@/pages/home-page'),
	},

	{
		path: '/:pathMatch(.*)',
		component: () => import('@/pages/not-found'),
		meta: {
			layout: CleanLayout,
		},
	},
]
