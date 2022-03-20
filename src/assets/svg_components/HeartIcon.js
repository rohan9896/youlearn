import React from "react";
import utilityStyles from "../../core/utility.module.css";

export const HeartIcon = ({ isSelected, labelText }) => (
  <div
    className={`${utilityStyles.flex} ${utilityStyles.flexDirectionColumn} ${utilityStyles.alignItemsCenter}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={32}
      height={32}
      stroke={"black"}
      strokeWidth="1.5"
      fill={isSelected ? "black" : "white"}
      style={{ cursor: "pointer" }}
    >
      <path d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12-12 12-12 12-9-8-12-12Z" />
    </svg>
    <small>{labelText}</small>
  </div>
);
