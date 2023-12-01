import React from "react";
import { SortDirection } from '@tanstack/react-table';

const ArrowSort = ({ sorting }: { sorting: SortDirection | false | undefined }) => {
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height="1em"
      width="1em"
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="up"
        fill={(sorting as SortDirection && sorting === 'asc') ? '#7070ff' : 'currentColor'}
        d="M1408 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
      />
      <path
        id="down"
        fill={(sorting as SortDirection && sorting === 'desc') ? '#7070ff' : 'currentColor'}
        d="M1408 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
      />
    </svg>
  );
};

export default ArrowSort;
