import React from "react";
import utilityStyles from "../../core/utility.module.css";

export const HistoryIcon = ({ isSelected, labelText }) => {
  return (
    <div className={`${utilityStyles.flex} ${utilityStyles.flexDirectionColumn} ${utilityStyles.alignItemsCenter}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={38}
        viewBox="0 0 26 26"
        stroke={"black"}
        strokeWidth="1"
        fill={isSelected ? "black" : "white"}
        style={{ cursor: "pointer" }}
      >
        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12h2c0 5.514 4.486 10 10 10s10-4.486 10-10S17.514 2 12 2a9.944 9.944 0 0 0-7.099 2.977l2.061 2.061L0 8.392l1.305-7.013 2.179 2.18A11.937 11.937 0 0 1 12 0c6.627 0 12 5.373 12 12zM11 6v8h7v-2h-5V6h-2z" />
      </svg>
      <small>{labelText}</small>
    </div>
  );
};
