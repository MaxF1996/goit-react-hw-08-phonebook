import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  max-width: fit-content;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: white;
  &.active {
    color: gold;
  }
  /* :hover {
    background-color: #fff;
  } */
`;
