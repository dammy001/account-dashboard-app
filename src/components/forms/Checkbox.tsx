import { ChangeEvent, FC, useState, useEffect, useRef, memo } from 'react';
import { CheckboxPropType } from '../../types/Input';
import { CheckboxOutline } from '../common/IconPack';

const Checkbox: FC<CheckboxPropType> = ({
  name,
  className,
  checked,
  tabIndex,
  onChange,
  disabled,
  style,
  labelText,
  ...rest
}: CheckboxPropType) => {
  const [isChecked, setChecked] = useState<boolean | number>(false);

  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    checked && setChecked(checked);
  }, [checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(ref.current?.checked);
    }
  };

  return (
    <div
      className={`text-sm font-thin text-center text-opacity-70 ${className}`}
    >
      <label className="checkbox" style={style}>
        <input
          type="checkbox"
          className="input"
          checked={!!isChecked}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
          {...rest}
        />
        <span className="label">
          {<CheckboxOutline isChecked={!!isChecked} />}
        </span>
        <span className="ml-1">{labelText}</span>
      </label>
    </div>
  );
};

export default memo<CheckboxPropType>(Checkbox);
