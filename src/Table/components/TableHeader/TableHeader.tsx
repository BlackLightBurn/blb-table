import React, { ReactNode } from "react";
import { SortDirection } from "@tanstack/react-table";
import ArrowSort from "../../icons/ArrowSort";
import styles from "./TableHeader.module.css";

interface TableHeaderProps {
  enableSorting?: boolean;
  onClick: () => void;
  colSpan: number;
  title: ReactNode;
  sorting?: SortDirection | false;
}

export const TableHeader = ({ colSpan, title, enableSorting = false, onClick, sorting }: TableHeaderProps) => {
  return (
    <th colSpan={colSpan} onClick={onClick}>
      <div className={enableSorting ? styles.clickable : ""}>
        {title}
        {enableSorting && <ArrowSort sorting={sorting} />}
      </div>
    </th>
  );
};
