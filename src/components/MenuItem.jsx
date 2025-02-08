import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function MenuItem(props) {
  const { path, text } = props;
  return (
    <li>
      <CustomNavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')} >
        {text}
      </CustomNavLink>
    </li>
  );
}

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const CustomNavLink = styled(NavLink)`
  color: black;
  &:hover {
    color: pink;
  }
  &.active {
    text-decoration: underline;
  }
`;
