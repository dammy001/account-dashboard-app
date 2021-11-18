import { FC, ReactNode, MouseEvent, memo } from 'react';
import { classNames } from '../../helpers/utils';

export type ButtonType = {
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit';
  disabled?: boolean;
};

const Button: FC<ButtonType> = ({
  children,
  onClick,
  className,
  type,
  disabled,
  ...rest
}: ButtonType) => (
  <button
    type={type}
    className={classNames(['btn', className])}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);

export default memo<ButtonType>(Button);
