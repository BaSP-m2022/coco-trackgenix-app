import React from 'react';
import styles from './modal.module.css';

const Edit = (/*props*/) => {
  let state;
  const reemplazo = 'active';
  /*props.editState*/ reemplazo == 'active'
    ? (state = styles.activeEdit)
    : (state = styles.noDisplay);
  return (
    <div className={state}>
      <h1>||TASK EDITION||</h1>
      <div>fullfill all inputs and press submit to change a task inner information</div>
      <div>otherwise press cancel to return to the task list</div>
      <button>Cancel</button>
      <button>Submit</button>
    </div>
  );
};

export default Edit;
