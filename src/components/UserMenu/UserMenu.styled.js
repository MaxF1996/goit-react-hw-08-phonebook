import styled from 'styled-components';

export const UserMenuBlock = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  /* flex-wrap: wrap; */
`;

export const UserName = styled.span`
  color: #0d80d8;
`;

export const UserGreetings = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const UserMenuLogOutBtn = styled.button`
  font-weight: 700;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 6px;

  :hover {
    color: black;
    background-color: white;
  }
`;
