import React from 'react';

const ListItem = ({ listItem }) => {
  const projectsContentList = listItem.map((project) => {
    return (
      <tr key={project.id}>
        <td>{project.name}</td>
        <td>{project.clientName}</td>
        <td>{project.admins}</td>
        <td>{project.createdAt}</td>
        <td>{project.description}</td>
        <td>{project.starDate}</td>
        <td>{project.updatedAt}</td>
        <td>{project.employees.length}</td>
        <td>{project.active.toString()}</td>
      </tr>
    );
  });
  return <>{projectsContentList}</>;
};

export default ListItem;
