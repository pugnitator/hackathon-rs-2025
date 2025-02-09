import { NavigationLink } from "./navigation-link.jsx";
import Logo from "../assets/Group 14.svg";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMainPage, setIsMainPage] = useState(false);
  const currentPage = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Фон появляется после прокрутки на 50px
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
	setIsMainPage(currentPage.pathname === "/")
  }, [currentPage]);

  const links = [
    { text: "Главная", path: "/#description" },
    { text: "Наша команда", path: "/#team" },
    { text: "Избранное", path: "/favorites" },
  ];

  return (
    <CustomHeader isMainPage={isMainPage} className={isScrolled ? "scrolled" : ""}>
      <img src={`${Logo}`} alt="logo" width="58" height="58" />
      <nav>
        <NavList>
          {links.map((link, index) => (
            <NavigationLink text={link.text} path={link.path} isMainPage={isMainPage} key={index} />
          ))}
        </NavList>
      </nav>
    </CustomHeader>
  );
};

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

const CustomHeader = styled.header`
  position: ${props=> props.isMainPage ? 'fixed' : 'static'};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  z-index: 100;

  &.scrolled {
    background-color: #0caac580;
  }
`;