import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

const Button = ({
  ButtonType,
  handleClick,
  extraClassName,
  isDisabled,
  children,
}) => {
  return (
    <button
      type={ButtonType}
      onClick={handleClick}
      className={`text-[#262626] rounded ${extraClassName}`}
      disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  ButtonType: PropTypes.oneOf(['button', 'submit']),
  extraClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.any,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  ButtonType: 'button',
  extraClassName: '',
  isDisabled: false,
  children: '',
  handleClick: () => {},
};

export default Button;
