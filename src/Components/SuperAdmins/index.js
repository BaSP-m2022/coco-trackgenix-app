import styles from './super-admins.module.css';
import React, { useEffect, useState } from 'react';
import SuperAdminForm from './SuperAdminForm';
import Table from '../SharedComponents/Table';
import Button from '../SharedComponents/Button/Button';

const SuperAdmin = () => {
  let [change, setSwitch] = useState(false);

  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins`);
      const resp = await response.json();
      resp.data.map((superadmin) => {
        superadmin.active = superadmin.active ? 'true' : 'false';
      });
      setList(resp.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteItem = async (_id) => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins/${_id}`, {
        method: 'DELETE'
      });
      console.log(response);
      setList(list.filter((listItem) => listItem._id !== _id));
      alert('The Super Admin have been delete successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const switcher = () => {
    setSwitch(change ? (change = false) : (change = true));
  };

  const handleEdit = () => {
    // console.log('Here goes the code for the confirm');
    window.location = '/super-admins/Form';
  };

  if (change) {
    return (
      <section className={styles.container}>
        <h2>Super Admin</h2>
        <SuperAdminForm switcher={switcher} />
        <button onClick={switcher}>Back</button>
      </section>
    );
  } else {
    return (
      <section className={styles.container}>
        <h2>Super Admin</h2>
        <Table
          data={list}
          headers={['name', 'lastName', 'email', 'password', 'active']}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
        >
          <Button handleClick={() => (window.location = '/super-admins/formAdd')}>
            Add Super Admin
          </Button>
        </Table>
      </section>
    );
  }
};
export default SuperAdmin;
