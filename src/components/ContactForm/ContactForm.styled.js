import styled from 'styled-components';

export const ContactFormBody = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 4%;
    align-items: center;

    flex-wrap: wrap;

    margin-bottom: 30px;
  }
`;

export const ContactField = styled.div`
  width: 46%;
  margin-bottom: 15px;
`;

export const ContactFormLabel = styled.label`
  display: block;
  font-weight: 700;
  font-size: 20px;
  max-width: fit-content;
  margin-bottom: 15px;
`;

export const ContactFormInput = styled.input`
  border-radius: 7px;
  border-style: unset;
  outline: none;
  display: block;
  border: 2px solid gold;
  height: 35px;
  font-size: 18px;
  min-width: 250px;
  max-width: 325px;
  width: 100%;
`;
export const ContactFormBtn = styled.button`
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
  /* :active {
    color: green;
    border: 2px solid green;
  } */
`;
