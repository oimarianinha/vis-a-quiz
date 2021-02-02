import React from 'react';
import PropTypes from 'prop-types';

export default function Logo({ logo }) {
  return (
    <div>
      <img src={logo} width="230px" height="50px" alt="Logo" />
    </div>
  );
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};
