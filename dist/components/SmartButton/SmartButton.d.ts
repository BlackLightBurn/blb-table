import React from 'react';
import type { ButtonProps } from '../Button';
interface StatesProps {
    [key: string]: React.ReactNode | string;
}
declare const states: StatesProps;
interface SmartButtonProps extends ButtonProps {
    state?: keyof typeof states;
}
export declare const SmartButton: ({ children, state: _state, onClick, disabled, ...props }: SmartButtonProps) => React.JSX.Element;
export {};
