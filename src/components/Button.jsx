import React from "react";

const Button = ({ label, type, onClick, disabled, ...rest }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
