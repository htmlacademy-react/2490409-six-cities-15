import { SmallInput } from '../../atoms';
import { FormEvent } from 'react';
import { loginAction } from '../../../store/slices/user/thunk.ts';
import { store } from '../../../store';

function LoginForm() {
  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    store.dispatch(loginAction({login: email, password}));
  };

  return (
    <>
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" onSubmit={handleSubmitForm} method="post">
        <SmallInput label={'E-mail'} type={'email'} name={'email'} placeholder={'Email'} isRequired />
        <SmallInput label={'Password'} type={'password'} name={'password'} placeholder={'Password'} isRequired />
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
}

export default LoginForm;
