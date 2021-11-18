import { CSSProperties, FocusEvent, ChangeEvent } from 'react';

export type CheckboxPropType = {
  name: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean | number;
  tabIndex?: string | number;
  readOnly?: boolean;
  style?: CSSProperties;
  labelText?: string;
  onChange?: (e?: any) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};

export type InputPropType = {
  name: string;
  className?: string;
  placeholder: string;
  type: 'text' | 'password' | 'date' | 'email';
  errors?: Record<string, any>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  required?: boolean;
  [key: string]: any;
};
