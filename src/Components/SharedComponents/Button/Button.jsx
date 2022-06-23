import React from 'react';

const Button = (props) => {
  return (
    <button className={props.type} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
