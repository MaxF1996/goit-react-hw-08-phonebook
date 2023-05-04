import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { AppContainer } from './App.styled';

const Layout = () => {
  return (
    <AppContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};

export default Layout;
