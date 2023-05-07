import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { UserMenuBlock, UserName, UserMenuLogOutBtn, UserGreetings } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBlock>
      <UserGreetings>
        Welcome, <UserName>{user.name}</UserName>
      </UserGreetings>
      <UserMenuLogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuLogOutBtn>
    </UserMenuBlock>
  );
};
