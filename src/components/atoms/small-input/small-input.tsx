import {ReactElement, RefObject} from 'react';

type SmallInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  autoComplete?: string;
  isRequired: boolean;
  reference: RefObject<HTMLInputElement>;
};

function SmallInput(props: SmallInputProps): ReactElement {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{props.label}</label>
      <input
        ref={props.reference}
        id={props.name}
        className="login__input form__input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.isRequired}
        autoComplete={props.autoComplete}
      />
    </div>
  );
}

export default SmallInput;
