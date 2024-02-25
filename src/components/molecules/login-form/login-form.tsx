import SmallInput from '../../atoms/small-input/small-input.tsx';

function LoginForm() {
  return (
    <>
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" action="#" method="post">
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
