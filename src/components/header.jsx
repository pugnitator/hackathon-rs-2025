import { useLocation } from 'react-router-dom'
import { NavigationLink } from './navigation-link.jsx'
import Logo from '../assets/Group 14.svg'
import styled from 'styled-components'

export const Header = () => {
  const currentPage = useLocation()
  console.log(currentPage)

  const menuItems = [
    { text: 'Главная', path: '/' },
    { text: 'Избранное', path: '/favorites' },
  ];

  return (
    <CustomHeader>
      <img src={`${Logo}`} alt='logo' width='58' height='58'/>
      <nav>
        <NavigationList>
          {menuItems.map(({ text, path }) => (
            <NavigationLink key={text}  text={text} path={path} />
          ))}
        </NavigationList>
      </nav>
    </CustomHeader>
  );
}

const CustomHeader = styled.header`
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  max-width: 1920px;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;
