import React from 'react';
import styles from './ShowMore.module.css';

export const ShowMore = ({ children, ...props }: React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button type="button" className={styles.showMore} {...props}>
      {children}
    </button>
  );
};
