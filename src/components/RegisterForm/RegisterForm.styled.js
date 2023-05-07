import styled from 'styled-components';

export const RegForm = styled.form`
  width: 320px;
`;

export const RegLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const RegBtn = styled.button`
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
