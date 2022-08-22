import React, { FC } from 'react';
import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface';
import { useRouter } from 'next/router';
import styles from './Menu.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import MaterialIcon from '@/components/ui/MaterialIcon';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter();

	return (
		<li className={cn({
			[styles.active]: asPath === item.link,
		})}>
			<Link href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	);
};

export default MenuItem;
