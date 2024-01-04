import React from 'react';
import PropTypes from 'prop-types';

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
      className={`text-[#262626] text-sm rounded py-2 px-6 cursor-pointer border-[1px] border-[#c5c9cd] bg-white  ${extraClassName}`}
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
