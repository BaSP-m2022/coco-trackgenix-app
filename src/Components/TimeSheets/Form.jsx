import React from 'react';

const Form = ({ switcher }) => {
  return (
    <form>
      <button onClick={switcher}>Submit</button>
    </form>
  );
};
export default Form;
