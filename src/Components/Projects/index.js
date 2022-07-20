import React, { useEffect, useState } from 'react';
import styles from 'Components/Projects/projects.module.css';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Button from 'Components/SharedComponents/Button/Button';
import Table from 'Components/SharedComponents/Table/index';
import Loading from 'Components/SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject, getProject } from 'Components/redux/modules/projects/thunks';

const Projects = () => {
  const dispatch = useDispatch();
  const dataResponse = useSelector((state) => state.project.list);
  const isLoading = useSelector((state) => state.project.isLoading);
  const [isOpen, setIsOpen] = useState(false);
  const role = sessionStorage.getItem('role');

  useEffect(async () => {
    dispatch(getProject());
    console.log(dataResponse, 'hola2');
  }, []);

  console.log(dataResponse, 'hola');

  const deleteItem = (_id) => {
    dispatch(deleteProject(_id));
    setIsOpen(true);
  };

  let history = useHistory();
  const handleEdit = (item) => {
    history.push(`${url}/edit?=${item}`);
  };

  if (isLoading) {
    return <Loading className={styles.loading}></Loading>;
  }

  const { url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        {role !== 'EMPLOYEE' && (
          <Button type={styles.addProject} handleClick={() => history.push(`${url}/add`)}>
            + Add New Project
          </Button>
        )}
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
