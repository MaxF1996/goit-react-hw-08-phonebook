import styled from 'styled-components';

export const ContactListUl = styled.ul`
  /* list-style: disc;
  padding-left: 40px; */
  margin-top: 10px;
`;
export const ContactListItem = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactItemInfo = styled.span`
  max-width: fit-content;
`;

export const ContactItemInfoName = styled.span`
  color: gold;
`;

export const ContactItemDeleteBtn = styled.button`
  margin-left: 10px;
  border: 2px solid gold;
  border-radius: 5px;
  line-height: 1;
  padding: 5px;
  color: black;
  font-weight: 700;
  background-color: transparent;
  color: white;
  :hover {
    background-color: white;
    color: black;
  }
  :active {
    color: red;
    background-color: transparent;
    border: 2px solid red;
  }
`;
