import { memo, NamedExoticComponent } from 'react';
import { InputPropType } from '../../types/Input';

export const Input: NamedExoticComponent<InputPropType> = memo<InputPropType>(
  ({
    className,
    type,
    placeholder,
    onChange,
    errors,
    name,
    ...rest
  }: InputPropType) => {
    const error = errors?.[name];

    return (
      <div className={`form-group ${error && 'error'}`}>
        <input
          type={type}
          placeholder={placeholder}
          className="input"
          onChange={onChange}
          onBlur={onChange}
          name={name}
          {...rest}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);
