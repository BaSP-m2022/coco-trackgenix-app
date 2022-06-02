import styles from './super-admins.module.css';
import React, { useEffect, useState } from 'react';
import List from './List';
import SuperAdminForm from './SuperAdminForm';

const SuperAdmin = () => {
  let [change, setSwitch] = useState(false);

  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins`);
      const data = await response.json();
      setList(data.data);
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
        {/* <button onClick={() => editSuperAdmin(list._id)}>Edit</button> */}
        <List list={list} setList={setList} deleteItem={deleteItem} />
        <button className={styles.addButton} onClick={switcher}>
          Add new Super Admin
        </button>
      </section>
    );
  }
};
export default SuperAdmin;
