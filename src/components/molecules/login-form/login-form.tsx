import { SmallInput } from '../../atoms';
import {FormEvent, useState} from 'react';
import { loginAction } from '../../../store/slices/user/thunk.ts';
import { useAppDispatch } from '../../../store/helpers.ts';

function LoginForm() {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState({email: '', password: ''})

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      loginAction({
        login: review.email,
        password: review.password,
      })
    );
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    setReview({...review, [event.currentTarget.name]: event.currentTarget.value});
  };

  return (
    <>
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" onSubmit={handleSubmitForm}>
        <SmallInput
          label="E-mail"
          type="email"
          name="email"
          placeholder="Email"
          handleChange={handleInputChange}
          isRequired
        />
        <SmallInput
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          handleChange={handleInputChange}
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
