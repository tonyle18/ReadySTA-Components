import React from 'react';

export function ChevronDownIcon({ color = '#1c1b1f', size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M7 10l5 5 5-5z"
        fill={color}
      />
    </svg>
  );
}
