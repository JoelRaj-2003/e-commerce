import React from "react";

const ContinueButton = ({
  width = "100%",
  height = "40px",
  color = "#fff",
  backgroundColor = "#743995",
  text = "Continue",
  handleButton,
  isDisabled = false,
  isLoading = false,
  disableBackgroundColor = "grey",
}) => {
  return (
    <button
      className="Common_ContiuneButton"
      style={{
        width,
        height,
        color: isDisabled ? "black" : color,
        backgroundColor: isDisabled ? disableBackgroundColor : backgroundColor,
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      disabled={isDisabled}
      onClick={handleButton}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default ContinueButton;
