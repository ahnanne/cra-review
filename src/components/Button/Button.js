import React from 'react';

export default function Button({ children, id, state }) {
  console.log(children);
  return (
    <button
      key={id}
      type="button"
      className={`button button__upload button--${state}`}
    >
      {children}
    </button>
  );
}

/*
<button type="button" class="button button__upload button--idle">
  업로드
  <img src="./src/assets/up-arrow.svg" alt="" height="12" />
</button>
*/

/*
<Button
      type={type}
      className={`button button__upload button--${state}`}
    ></Button>
*/