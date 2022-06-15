import React, { useEffect } from 'react';
import styles from './admins.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../SharedComponents/Logo/Logo';
import Table from '../SharedComponents/Table';
import Loading from '../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAdmin, deleteAdmin } from '../redux/modules/admins/thunks';

const Admins = (props) => {
  const dispatch = useDispatch();
  const dataResponse = useSelector((state) => state.admin.list);
  const isLoading = useSelector((state) => state.admin.isLoading);
  const error = useSelector((state) => state.admin.error);

  useEffect(async () => {
    dispatch(getAdmin());
  }, []);

  const deleteItem = (_id) => {
    dispatch(deleteAdmin(_id));
  };
  let history = useHistory();
  const handleEdit = (_id) => {
    history.push(`/admins/edit?=${_id}`);
  };

  if (isLoading) {
    return <Loading className={styles.loading}></Loading>;
  }

  if (error) {
    return <div>There was an error!</div>;
  }
  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Admins</h2>
      <div>
        <button onClick={() => props.history.push('admins/add')} className={styles.addBtn}>
          + Add an admin
        </button>
        <Table
          data={dataResponse}
          headers={['name', 'lastName', 'email', 'password', 'active']}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
        />
      </div>
    </section>
  );
};

export default Admins;
