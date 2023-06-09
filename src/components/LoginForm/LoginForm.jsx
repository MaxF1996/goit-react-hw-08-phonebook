import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { LogForm, LogLabel, LogBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogForm onSubmit={handleSubmit} autoComplete="off">
      <LogLabel>
        Email
        <input type="email" name="email" />
      </LogLabel>
      <LogLabel>
        Password
        <input type="password" name="password" />
      </LogLabel>
      <LogBtn type="submit">Log In</LogBtn>
    </LogForm>
  );
};
