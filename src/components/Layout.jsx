import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { AppContainer } from './App.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <AppContainer>
          <Outlet />
        </AppContainer>
      </Suspense>
    </>
  );
};

export default Layout;
