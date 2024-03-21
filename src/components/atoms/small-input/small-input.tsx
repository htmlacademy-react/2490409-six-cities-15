import {FormEvent, ReactElement} from 'react';

type SmallInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  isRequired: boolean;
};

function SmallInput(props: SmallInputProps): ReactElement {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{props.label}</label>
      <input
        id={props.name}
        className="login__input form__input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.isRequired}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SmallInput;
