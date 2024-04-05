import { SmallInput } from '../../atoms';
import { FormEvent, useRef } from 'react';
import { loginAction } from '../../../store/slices/user/thunk.ts';
import { useAppDispatch } from '../../../store/helpers.ts';
import { toast } from 'react-toastify';
import { browserHistory } from '../../../routing';

function LoginForm() {
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      return;
    }

    if (!/^(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(passwordRef.current.value)) {
      toast.warn('Password should contain at least 1 letter and 1 number');

      return;
    }

    dispatch(
      loginAction({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      })
    )
      .unwrap()
      .then(() => {
        browserHistory.go(-3);
      });
  };

  return (
    <>
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" onSubmit={handleSubmitForm}>
        <SmallInput
          reference={emailRef}
          label="E-mail"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          isRequired
        />
        <SmallInput
          reference={passwordRef}
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          isRequired
        />
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
}

export default LoginForm;
