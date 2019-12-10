import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  value,
  onClick,
  style,
}) => (
  <input type="button" value={value} onClick={onClick} style={style}/>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  style: {},
};

export default Button;
