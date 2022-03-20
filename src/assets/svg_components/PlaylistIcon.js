import React from "react";
import utilityStyles from "../../core/utility.module.css";

export const PlaylistIcon = ({ isSelected, labelText }) => {
  return (
    <div
      className={`${utilityStyles.flex} ${utilityStyles.flexDirectionColumn} ${utilityStyles.alignItemsCenter}`}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        stroke={"black"}
        strokeWidth="1"
        fill={isSelected ? "black" : "white"}
        style={{ cursor: "pointer" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z"
          />
      </svg>
      <small>{labelText}</small>
    </div>
  );
};
