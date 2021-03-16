import React from 'react';
import PropTypes from 'prop-types'

export default function SVGIcon({ src, ...restProps }) {
  return (
    <img src={`${src}.svg`} alt="" {...restProps} />
  );
}

SVGIcon.defaultProps = {
  alt: '',
};

SVGIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

/*
<button type="button" class="button button__upload button--idle">
  업로드
  <img src="./src/assets/up-arrow.svg" alt="" height="12" />
</button>
*/
