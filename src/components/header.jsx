import { NavigationLink } from './navigation-link.jsx'
// import { useLocation } from 'react-router-dom'
import Logo from '../assets/Group 14.svg'
import styled from 'styled-components'

export const Header = () => {
	// const currentPage = useLocation()
	// console.log(currentPage)

	const links = [
		{ text: 'Главная', path: '/' },
		{ text: 'Избранное', path: '/favorites' }
	]

	return (
		<CustomHeader>
			<img src={`${Logo}`} alt='logo' width='58' height='58'/>
			<nav>
				<NavList>
					{links.map((link, index) => (
						<NavigationLink text={link.text} path={link.path} key={index} />
					))}
				</NavList>
			</nav>
		</CustomHeader>
	)
}

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

const CustomHeader = styled.header`
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  max-width: 1920px;
`;