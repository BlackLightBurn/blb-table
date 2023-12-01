import React from "react";

const ArrowPrev = () => (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    height="12"
    width="12"
    viewBox="0 0 8 12"
    style={{
      verticalAlign: 'middle',
      color: 'rgb(155, 155, 155)',
      pointerEvents: 'none',
    }}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M16 18H-8V-6h24z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M6 12l1.41-1.41L2.83 6l4.58-4.59L6 0 0 6z"
      />
    </g>
  </svg>
);

export default ArrowPrev;
