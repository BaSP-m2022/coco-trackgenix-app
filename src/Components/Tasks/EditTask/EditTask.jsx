import React, { useState } from 'react';

const EditItem = ({ id, workedHours, description }) => {
  console.log(id, workedHours, description);
  const [whChange, setWHChange] = useState(workedHours);
  const [desChange, setDesChange] = useState(description);

  const putData = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      description: desChange,
      workedHours: whChange
    })
  };

  const updateItem = (event) => {
    event.preventDefault();
    return fetch(`https://coco-trackgenix-server.vercel.app/tasks/${id}`, putData);
  };

  return (
    <div>
      <h2>Edit Task</h2>
      {
        <form onSubmit={updateItem}>
          <div>
            <label htmlFor="">Task description</label>
            <input
              type="text"
              name="description"
              value={desChange}
              onChange={(e) => setDesChange(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Worked Hours</label>
            <input
              type="number"
              name="workedHours"
              onChange={(e) => setWHChange(e.target.value)}
              value={whChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <button>Cancel</button>
          </div>
        </form>
      }
    </div>
  );
};

export default EditItem;
