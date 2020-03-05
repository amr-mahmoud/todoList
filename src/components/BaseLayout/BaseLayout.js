import React from 'react';
import ContentRoute from '../../routes/ContentRoute';
import { Header, Footer, Body } from '../UI';
import { BaseLayoutWrapper } from './BaseLayout.style';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
const BaseLayout = () => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

	return (
		<BaseLayoutWrapper>
			{!isTabletOrMobile && (
				<Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible={true} width="thin">
					<Link to={'/'}>
						<Menu.Item as="a">
							<Icon name="home" />
							Home List
						</Menu.Item>
					</Link>

					<Link to={'/completedList'}>
						<Menu.Item as="a">
							<Icon name="list" />
							CompletedList
						</Menu.Item>
					</Link>
				</Sidebar>
			)}
			<Header>
				{isTabletOrMobile && (
					<Link to={'/'}>
						<Icon name="home" />
					</Link>
				)}
				{isTabletOrMobile && (
					<Link to={'/completedList'}>
						<Icon name="list" />
					</Link>
				)}
			</Header>
			<Body>
				<ContentRoute />
			</Body>
			<Footer />
		</BaseLayoutWrapper>
	);
};

export default BaseLayout;
