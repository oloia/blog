import { FC } from 'react';
import { IHome } from '@/components/screens/home/home.interface';
import Layout from '@/components/layout/Layout';

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home page</h1>
		</Layout>
	);
};

export default Home;
