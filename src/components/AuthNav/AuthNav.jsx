import { AuthNavLink, AuthBlock } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBlock>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </AuthBlock>
  );
};
