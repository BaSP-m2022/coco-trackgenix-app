import React from 'react';

const Form = ({ switcher }) => {
  return (
    <form>
      <div>
        <label>Employee</label>
        <select></select>
      </div>
      <div>
        <label>Project</label>
        <select></select>
      </div>
      <div>
        <label>Start Date</label>
        <input type="date"></input>
      </div>
      <div>
        <label>End Date</label>
        <input type="date"></input>
      </div>
      <div>
        <label>Project</label>
        <select></select>
      </div>
      <button onClick={switcher}>Submit</button>
    </form>
  );
};
export default Form;
