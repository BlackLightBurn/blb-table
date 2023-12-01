import React from "react";
import styles from "./EmptyData.module.css";

interface EmptyDataProps {
  title: string;
  subtitle: string;
}

export const EmptyData = ({ title, subtitle }: EmptyDataProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};
