import React, { Dispatch, SetStateAction } from "react";
import { flexRender, HeaderGroup } from "@tanstack/react-table";
import { TableHeader } from "../TableHeader";
import { QueryParams } from "../../../types";

interface THeadProps {
  headerGroups: HeaderGroup<object>[];
  onChange: Dispatch<SetStateAction<QueryParams>>;
}

export const THead = ({ headerGroups, onChange }: THeadProps) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const { enableSorting } = header.column.columnDef;
            return (
              <TableHeader
                key={header.id}
                enableSorting={enableSorting}
                colSpan={header.colSpan}
                title={flexRender(header.column.columnDef.header, header.getContext())}
                sorting={header.column.getIsSorted()}
                onClick={() => {
                  if (enableSorting) {
                    header.column.toggleSorting();
                    const desc = header.column.getIsSorted() === "desc" ? true : false;
                    onChange((prev) => ({
                      ...prev,
                      sort: [{ id: header.column.id, desc }],
                    }));
                  }
                }}
              />
            );
          })}
        </tr>
      ))}
    </thead>
  );
};
