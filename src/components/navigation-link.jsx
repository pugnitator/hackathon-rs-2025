import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const NavigationLink = ({ path, text }) => {
  return (
    <li>
      <CustomNavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')} >
        {text}
      </CustomNavLink>
    </li>
  );
}

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const CustomNavLink = styled(NavLink)`
  color: #ccc;

  &:hover {
    color: pink;
  }
  
  &.active {
    text-decoration: underline;
  }
`;
