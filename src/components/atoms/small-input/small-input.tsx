import {ReactElement} from 'react';

type SmallInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  isRequired: boolean;
};

function SmallInput(props: SmallInputProps): ReactElement {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{props.label}</label>
      <input
        className="login__input form__input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.isRequired}
      />
    </div>
  );
}

export default SmallInput;
