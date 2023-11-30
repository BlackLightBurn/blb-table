import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    paint?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
    variant?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    icon?: React.ReactNode;
    block?: boolean;
}
export declare const Button: ({ className, size, paint, variant, block, disabled, startIcon, endIcon, icon, children, ...props }: ButtonProps) => React.JSX.Element;
