import React from 'react';
import styles from './ColGroup.module.css';

interface ColGroupProps {
  template?: string[];
}

export const ColGroup = ({ template = [] }: ColGroupProps) => {
  if (!template.length) return;
  return (
    <colgroup>
      {template.map((width, idx) => (
        <col key={idx} className={styles.col} width={width} />
      ))}
    </colgroup>
  );
};
