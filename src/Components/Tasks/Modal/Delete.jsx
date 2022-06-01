import React from 'react';
import styles from './modal.module.css';

const Delete = (/*props*/) => {
  let state;
  const reemplazo = 'active';
  /*props.deleteState*/ reemplazo == 'active'
    ? (state = styles.activeDelete)
    : (state = styles.noDisplay);
  return (
    <div className={state}>
      <h1>||TASK DELETION||</h1>
      <div>Are you sure to delete this task?</div>
      <button>Cancel</button>
      <button>Delete</button>
    </div>
  );
};

export default Delete;
