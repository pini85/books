import React, { useLayoutEffect, useRef } from "react";
import { sanitizeInput } from "../../utils/security/sanitizeUtils";
import PropTypes from "prop-types";

const InputComponent = ({
  type,
  name,
  placeholder,
  onChange,
  label,
  value,
  ariaLabel,
  validation,
  autoFocus = false,
  ...rest
}) => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e) => {
    //i remember you said something about this which wasnt good?
    const sanitizedValue = sanitizeInput(e.target.value);

    if (onChange) {
      onChange(sanitizedValue);
    }
  };

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        ref={inputRef}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel || label || name}
        {...validation}
        {...rest}
      />
    </>
  );
};

InputComponent.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};

InputComponent.defaultProps = {
  type: "text",
  placeholder: "",
};

export default React.memo(InputComponent);
