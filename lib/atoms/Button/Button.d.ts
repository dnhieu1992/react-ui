import React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    variant?: 'text' | 'contained' | 'outlined';
    backgroundColor?: 'default' | 'primary' | 'success' | 'none';
    onClick?: () => void;
}
declare const _default: React.MemoExoticComponent<({ children, onClick }: ButtonProps) => JSX.Element>;
export default _default;
