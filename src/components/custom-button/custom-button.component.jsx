import React from "react";

import "./custom-button.style.scss";
const CustomButton = ({ children, isGoogleSingIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSingIn ? "google-sing-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
