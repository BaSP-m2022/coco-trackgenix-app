import React from 'react';

const Button = (props) => {
  console.log(props);
  const myClass = props.type;
  return (
    <button className={myClass} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
