// import React from 'react';

// const ListItem = ({ listItem, deleteItem }) => {
//   const handleDelete = () => {
//     deleteItem(listItem._id);
//   };

//   const tasks = listItem.tasks.description;
//   const stDate = new Date(listItem.startDate).toLocaleDateString();
//   const enDate = new Date(listItem.endDate).toLocaleDateString();
//   return (
//     <tr>
//       <td>
//         <ul>
//           {tasks.map((element) => {
//             return <li key={element.id}>{element.description}</li>;
//           })}
//         </ul>
//       </td>
//       <td>{listItem.employeeId.firstName}</td>
//       <td>{listItem.projectId != null ? listItem.projectId.name : 'not assigned!'}</td>
//       <td>{`${stDate}`}</td>
//       <td>{`${enDate}`}</td>
//       <td>
//         <button onClick={() => handleDelete(listItem._id)}>X</button>
//       </td>
//       <td>
//         <button>Edit</button>
//       </td>
//     </tr>
//   );
// };

// export default ListItem;

import React from 'react';

const ListItem = ({ listItem, deleteItem, editMode, updateItem }) => {
  const handleDelete = (_id) => {
    deleteItem(_id);
  };
  const handleUpdate = (_id) => {
    updateItem(_id);
    editMode();
  };
  const timeSheetList = listItem.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.employeeId.firstName}</td>
        <td>{item.projectId != null ? item.projectId.name : 'No project'}</td>
        <td>{item.startDate.toString()}</td>
        <td>{item.endDate.toString()}</td>
        <td>{item.tasks.length === 1 ? item.tasks[0].description : 'Various Task'}</td>
        <td>
          <button onClick={() => handleDelete(item._id)}>X</button>
        </td>
        <td>
          <button onClick={() => handleUpdate(item._id)}>Edit</button>
        </td>
      </tr>
    );
  });
  return <>{timeSheetList}</>;
};

export default ListItem;
