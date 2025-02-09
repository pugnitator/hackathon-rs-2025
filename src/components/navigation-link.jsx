import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const NavigationLink = ({ path, text, isMainPage }) => {
  const currentPage = useLocation();
  const [isActiveNow, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(currentPage.pathname + currentPage.hash === path);
  }, [path, currentPage])

  return (
    <li>
      <CustomNavLink
        to={path}
        isMainPage={isMainPage}
        isActiveNow = {isActiveNow}
        className={isActive => (isActive ? "active" : "")}
      >
        {text}
      </CustomNavLink>
    </li>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

const CustomNavLink = styled(NavLink)`
  color: ${(prop) => (prop.isMainPage ? "white" : "black")};
  font-size: 20px;
  font-weight: 400;

  &:hover {
    color: #6c63ff;
  }

  &.active {
    text-decoration: ${prop => prop.isActiveNow ? 'underline' : 'none'};
  }
`;