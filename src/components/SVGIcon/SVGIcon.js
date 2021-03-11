import React from 'react';

export default function SVGIcon({ src, ...restProps }) {
  console.log(restProps);
  return (
    <img src={`${src}.svg`} alt="" {...restProps} />
  );
}

/*
<button type="button" class="button button__upload button--idle">
  업로드
  <img src="./src/assets/up-arrow.svg" alt="" height="12" />
</button>
*/
