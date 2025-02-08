import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from '../assets/Group 14.svg';

export default function Header() {
  const currentPage = useLocation();
  console.log(currentPage);

  const menuItems = [
    { text: "Главная", path: "/" },
    { text: "Избранное", path: "/favorites" },
  ];

  return (
    <CustomHeader>
      <img src={Logo} alt='logo'/>
      <nav>
        <MenuItemList>
          {menuItems.map(({ text, path }) => (
            <MenuItem text={text} path={path} key={Date} />
          ))}
        </MenuItemList>
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

const MenuItemList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;
