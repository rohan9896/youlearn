import React from "react";
import utilityStyles from "../../core/utility.module.css";

export const HomeIcon = ({ isSelected, labelText }) => (
  <div className={`${utilityStyles.flex} ${utilityStyles.flexDirectionColumn} ${utilityStyles.alignItemsCenter}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke={"black"}
      strokeWidth="1.5"
      fill={isSelected ? "black" : "white"}
      style={{ cursor: "pointer" }}
    >
      <path d="M21 13v10h-6v-6H9v6H3V13H0L12 1l12 12h-3zm-1-5.907V2h-3v2.093l3 3z" />
    </svg>
    <small>{labelText}</small>
  </div>
);
