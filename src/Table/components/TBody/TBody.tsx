import React from "react";
import { flexRender, Row } from "@tanstack/react-table";

interface TBodyProps {
  rows: Row<object>[];
}

export const TBody = ({ rows }: TBodyProps) => {
  return (
    <tbody>
      {rows.map((row) => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
