import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { AppHeader } from './AppBar.styled';
import { AppContainer } from '../App.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppHeader>
      <AppContainer className="flex-container">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppContainer>
    </AppHeader>
  );
};
