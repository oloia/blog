import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface';

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			link: '/',
			title: 'Home',
			icon: 'MdHome',
		},
		{
			link: '/genres',
			title: 'Discovery',
			icon: 'MdExplore',
		},
		{
			link: '/fresh',
			title: 'Fresh movies',
			icon: 'MdRefresh',
		},
		{
			link: '/trending',
			title: 'Trending now',
			icon: 'MdLocalFireDepartment',
		},
	],
};

export const userMenu: IMenu = {
	title: 'General',
	items: [],
};
