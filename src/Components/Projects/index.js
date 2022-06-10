import React, { useEffect, useState } from 'react';
import styles from './projects.module.css';
import { useHistory } from 'react-router-dom';
import Modal from '../SharedComponents/Modal/Modal';
import Logo from '../SharedComponents/Logo/Logo';
import Button from '../SharedComponents/Button/Button';
import Table from '../SharedComponents/Table/index';

const Projects = (props) => {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const changeDate = (date) => {
    let changedDate;
    if (!date) {
      changedDate = null;
    } else {
      let substrained = date.substring(0, 10);
      let year = Number(substrained.split('-')[0]);
      let month = Number(substrained.split('-')[1]);
      let day = Number(substrained.split('-')[2]);

      if (day < 10) {
        day = `0${day}`;
      }
      if (month < 10) {
        month = `0${month}`;
      }

      changedDate = `${month}-${day}-${year}`;
    }

    return changedDate;
  };

  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/projects`);
      const data = await response.json();
      data.data.map((item) => {
        item.active = item.active ? 'true' : 'false';
        item.createdAt = changeDate(item.createdAt);
        item.startDate = changeDate(item.startDate);
        item.endDate = changeDate(item.endDate);
        item.employees = item.employees.length;
      });
      setList(data.data);
    } catch (error) {
      console.error;
    }
  }, []);

  const deleteItem = async (_id) => {
    try {
      await fetch(`https://coco-trackgenix-server.vercel.app/projects/${_id}`, {
        method: 'DELETE'
      });
      setIsOpen(true);
    } catch (error) {
      console.error;
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  let history = useHistory();
  const handleEdit = (item) => {
    history.push(`/projects/edit?=${item}`);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.container}>
        <h2 className={styles.title}>projects</h2>
        <Button type={styles.addProject} handleClick={() => props.history.push('/projects/add')}>
          add new
        </Button>
        <Table
          data={list}
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
            <p>Project deleted succesffully</p>
          </div>
          <div>
            <Button type={styles.modalProjectBtn} handleClick={() => setIsOpen(false)}>
              ok
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
