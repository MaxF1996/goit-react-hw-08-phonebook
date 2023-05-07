import styled from 'styled-components';

export const LogForm = styled.form`
  width: 320px;
`;

export const LogLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const LogBtn = styled.button`
  display: block;
  border: 2px solid gold;
  border-radius: 5px;
  line-height: 1;
  padding: 8px;
  color: black;
  font-weight: 700;
  background-color: white;
  :hover {
    background-color: black;
    color: white;
  }
`;
