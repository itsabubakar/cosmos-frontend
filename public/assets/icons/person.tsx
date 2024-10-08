import React from "react";

const person = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "20"}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 8C10.7 8 12.06 6.65 12.06 5C12.06 3.35 10.7 2 9 2C7.3 2 5.94 3.35 5.94 5C5.94 6.65 7.3 8 9 8ZM9 10C6.2 10 3.94 7.76 3.94 5C3.94 2.24 6.2 0 9 0C11.8 0 14.06 2.24 14.06 5C14.06 7.76 11.8 10 9 10ZM2 18H16V16.67C16 14.92 13.69 13.11 9 13.11C4.31 13.11 2 14.92 2 16.67V18ZM9 11.11C15.66 11.11 18 14.44 18 16.67V20H0V16.67C0 14.44 2.34 11.11 9 11.11Z"
        fill="black"
      />
    </svg>
  );
};

export default person;
