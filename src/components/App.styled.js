import styled from 'styled-components';

export const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  margin-bottom: 15px;
  @media screen and (min-width: 480px) {
    max-width: 400px;
  }

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }

  &.flex-container {
    display: flex;
    align-items: center;
  }
`;

export const AppBody = styled.div``;
export const AppHeader = styled.h1``;
export const AppSubheader = styled.h2`
  margin-top: 15px;
  margin-bottom: 15px;
`;
