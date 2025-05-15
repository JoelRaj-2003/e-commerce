import React from "react";
import Color from "../../../utils/Color";

const ContinueButton = ({
  width = "100%",
  height = "40px",
  color = "#fff",
  backgroundColor = Color.primary,
  text = "Continue",
  handleButton,
  isDisabled = false,
  isLoading = false,
  disableBackgroundColor = Color.secondary,
}) => {
  return (
    <button
      className="Common_ContiuneButton"
      style={{
        width,
        borderRadius: "8px",
        height,
        color: isDisabled ? "#000" : color,
        backgroundColor: isDisabled ? disableBackgroundColor : backgroundColor,
        cursor: isDisabled ? "not-allowed" : "pointer",
        border: "none",
      }}
      disabled={isDisabled}
      onClick={handleButton}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default ContinueButton;
