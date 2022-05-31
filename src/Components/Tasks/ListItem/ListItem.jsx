import React from 'react';

const ListItem = ({ listItem, deleteItem }) => {
  if (listItem.length === 0 || listItem === 'undefined') {
    return 'There are not tasks';
  }
  const currentBody = listItem.map((props) => {
    const handleDelete = () => {
      deleteItem(props._id);
    };
    return (
      <tr key={props.id}>
        <td>{props.description}</td>
        <td>{props.workedHours.toString()}</td>
        <td>{props.date}</td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    );
  });
  return <>{currentBody}</>;
};

export default ListItem;
