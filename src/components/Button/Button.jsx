import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick} className="btn">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
