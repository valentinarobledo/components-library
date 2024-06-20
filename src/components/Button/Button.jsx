import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ children, onClick, className }) => (
  <button type="button" onClick={onClick} className={`btn ${className}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
