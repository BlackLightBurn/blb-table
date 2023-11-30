import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import CheckIcon from './components/CheckIcon';
import CrossIcon from './components/CrossIcon';
import styles from './SmartButton.module.css';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';

interface StatesProps {
  [key: string]: React.ReactNode | string;
}

const states: StatesProps = {
  default: 'Submit',
  loading: (
    <div className={styles.spinner}>
      <div />
    </div>
  ),
  success: <CheckIcon />,
  error: <CrossIcon />,
};

interface SmartButtonProps extends ButtonProps {
  state?: keyof typeof states;
}

export const SmartButton = ({ children, state: _state, onClick, disabled, ...props }: SmartButtonProps) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;
  const [isDisabled, setIsDisabled] = useState<boolean>(disabled || false);
  const [state, setState] = useState<SmartButtonProps['state']>('default');

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (isDisabled || !onClick) return;
    if (onClick.constructor.name !== 'AsyncFunction') return onClick(event);
    clearTimeout(timeoutId);
    setState('loading');
    setIsDisabled(true);
    try {
      await onClick(event);
      setState('success');
    } catch (error) {
      setState('error');
      console.error(`Submit error: ${error}`);
    } finally {
      timeoutId = setTimeout(() => {
        setState(_state || 'default');
        setIsDisabled(false);
      }, 2000);
    }
  }

  useEffect(() => {
    if (_state) {
      Object.hasOwn(states, _state) ? setState(_state) : setState('default');
    }
  }, [_state]);

  return (
    <Button disabled={disabled} onClick={onClick ? handleSubmit : undefined} {...props}>
      {state !== 'default' && <div className={styles.overlay}>{state && states[state]}</div>}
      <span className={clsx(styles.content, { [styles.visibility]: state !== 'default' })}>
        {children || states.default}
      </span>
    </Button>
  );
};
