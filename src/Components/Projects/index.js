import React, { useEffect, useState } from 'react';
import styles from 'Components/Projects/projects.module.css';
// import { useHistory } from 'react-router-dom';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Button from 'Components/SharedComponents/Button/Button';
import Table from 'Components/SharedComponents/Table/index';
import Loading from 'Components/SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject, getProject } from 'Components/redux/modules/projects/thunks';

const Projects = (props) => {
  const dispatch = useDispatch();
  const dataResponse = useSelector((state) => state.project.list);
  const isLoading = useSelector((state) => state.project.isLoading);
  const [isOpen, setIsOpen] = useState(false);

  // const { url } = useRouteMatch();

  useEffect(async () => {
    dispatch(getProject());
  }, []);

  const deleteItem = (_id) => {
    dispatch(deleteProject(_id));
  };

  // let history = useHistory();
  const handleEdit = (item) => {
    props.history.push(`/projects/edit?=${item}`);
  };

  if (isLoading) {
    return <Loading className={styles.loading}></Loading>;
  }
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <Button type={styles.addProject} handleClick={() => props.history.push('projects/add')}>
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
