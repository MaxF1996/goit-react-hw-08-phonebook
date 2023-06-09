import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: gold;
  }
`;

export const AuthBlock = styled.div`
  max-width: fit-content;
  display: inline-block;
`;
