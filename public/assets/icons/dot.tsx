import React from "react";

const smallDot = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <svg
      width={`${width ? width : "4"}`}
      height={`${height ? height : "4"}`}
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 2.04092C3.5 2.90154 2.81893 3.58184 2 3.58184C1.18107 3.58184 0.5 2.90154 0.5 2.04092C0.5 1.1803 1.18107 0.5 2 0.5C2.81893 0.5 3.5 1.1803 3.5 2.04092Z"
        fill="#989898"
        fill-opacity="0.5"
        stroke="white"
      />
    </svg>
  );
};

export default smallDot;
