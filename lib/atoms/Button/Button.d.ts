import React from 'react';
export type ButtonProps = {
    backgroundColor?: string;
    primary?: boolean;
    label?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: React.FC<ButtonProps>;
export default Button;
