import React, { useEffect, useState } from 'react';
import styles from './projects.module.css';
import { useHistory } from 'react-router-dom';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import Table from '../SharedComponents/Table/index';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject, getProject } from '../redux/modules/projects/thunks';

const Projects = (props) => {
  const dispatch = useDispatch();
  const dataResponse = useSelector((state) => state.project.list);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(async () => {
    dispatch(getProject());
  }, []);

  // const deleteItem = async (_id) => {
  //   try {
  //     await fetch(`https://coco-trackgenix-server.vercel.app/projects/${_id}`, {
  //       method: 'DELETE'
  //     });
  //     setIsOpen(true);
  //   } catch (error) {
  //     console.error;
  //   }
  //   setList(list.filter((listItem) => listItem._id !== _id));
  // };

  const deleteItem = (_id) => {
    dispatch(deleteProject(_id));
  };

  let history = useHistory();
  const handleEdit = (item) => {
    history.push(`/projects/edit?=${item}`);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <Button type={styles.addProject} handleClick={() => props.history.push('/projects/add')}>
          + Add New Project
        </Button>
        <Table
          data={dataResponse}
          headers={[
            'name',
            'clientName',
            'admins',
            'createdAt',
            'description',
            'startDate',
            'endDate',
            'employees',
            'active'
          ]}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
        ></Table>
        <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
          <h2>Success!</h2>
          <div>
            <p>Project deleted successfully</p>
          </div>
          <div>
            <Button type={styles.modalProjectBtn} handleClick={() => setIsOpen(false)}>
              Ok
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
