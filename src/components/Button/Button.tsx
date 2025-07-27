import type { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  mode: 'black' | 'red';
}

export const Button = ({ children, mode, ...rest }: Props) => {
  const buttonClass = `button--${mode}`;

  return (
    <button className={`button ${buttonClass}`} {...rest}>
      {children}
    </button>
  );
};
