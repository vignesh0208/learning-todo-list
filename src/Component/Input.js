import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  inputType,
  inputId,
  inputName,
  extraClassName,
  inputPlaceholder,
  inputValue,
  inputChecked,
  handleChange,
  isDisabled,
  inputRef,
}) => {
  return (
    <input
      type={inputType}
      id={inputId}
      name={inputName}
      className={`p-2 rounded text-sm text-[#262626] border-[1px] border-[#c5c9cd] bg-white focus-visible:outline-none ${extraClassName}`}
      placeholder={inputPlaceholder}
      value={inputType !== 'checkbox' ? inputValue : undefined}
      checked={inputType === 'checkbox' ? inputChecked : undefined}
      onChange={handleChange}
      disabled={isDisabled}
      ref={inputRef}
    />
  );
};

Input.propTypes = {
  inputType: PropTypes.oneOf([
    'text',
    'password',
    'checkbox',
    'radio',
    'number',
  ]),
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  extraClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.any,
  inputChecked: PropTypes.bool,
  handleChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  inputRef: PropTypes.any,
};

Input.defaultProps = {
  inputType: 'text',
  inputId: '',
  inputName: '',
  extraClassName: '',
  inputPlaceholder: '',
  inputValue: '',
  inputChecked: false,
  handleChange: () => {},
  isDisabled: false,
  inputRef: null,
};

export default Input;
