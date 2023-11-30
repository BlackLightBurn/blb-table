import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  paint?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  icon?: React.ReactNode;
  block?: boolean;
}

export const Button = ({
  className = '',
  size = 'medium',
  paint = 'primary',
  variant = 'contained',
  block,
  disabled,
  startIcon,
  endIcon,
  icon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(styles.btn, {
        [styles.btnPrimary]: paint === 'primary',
        [styles.btnSuccess]: paint === 'success',
        [styles.btnWarning]: paint === 'warning',
        [styles.btnDanger]: paint === 'danger',
        [styles.btnInfo]: paint === 'info',
        [styles.btnOutlined]: variant === 'outlined',
        [styles.btnText]: variant === 'text',
        [styles.btnBlock]: block,
        [styles.btnDisabled]: disabled,
        [styles.btnSmall]: size === 'small',
        [styles.btnMedium]: size === 'medium',
        [styles.btnLarge]: size === 'large',
        [className]: !!className,
      })}
      {...props}
    >
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      {icon || children}
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </button>
  );
};
