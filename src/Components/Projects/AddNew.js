import React from 'react';

const AddNew = () => {
  return (
    <div>
      <h2>Add New Project</h2>
      <h3>-Form-</h3>
      <button onClick={() => (window.location = '/projects')}>BACK</button>
    </div>
  );
};

export default AddNew;
