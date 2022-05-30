import styles from './super-admins.module.css';
import React, { useEffect, useState } from 'react';
import List from './List';
// import EditSuperAdmin from './SuperAdminForm';
// import SuperAdminForm from './SuperAdminForm';

const SuperAdmin = () => {
  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins`);
      const data = await response.json();
      // save(data);
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
      alert('Se eliminooooo');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.container}>
      <h2>Super Admin</h2>
      <div>
        {/* <SuperAdminForm /> */}
        <List list={list} setList={setList} deleteItem={deleteItem} />
      </div>
    </section>
  );
};
export default SuperAdmin;
