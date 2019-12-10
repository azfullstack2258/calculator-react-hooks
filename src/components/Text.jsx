import React from 'react';
import PropTypes from 'prop-types';

const Text = ({
  value,
  id,
  placeholder,
  readOnly,
  style,
}) => (
  <input
    type="text"
    id={id}
    value={value}
    placeholder={placeholder}
    readOnly={readOnly}
    style={style}
  />
);

Text.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  style: PropTypes.object,
};

Text.defaultProps = {
  id: '',
  placeholder: '',
  readOnly: false,
  style: {},
};

export default Text;
