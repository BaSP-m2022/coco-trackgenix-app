import React, { useEffect } from 'react';
import styles from './super-admins.module.css';
import Table from '../SharedComponents/Table';
import Button from '../SharedComponents/Button/Button';
import Logo from '../SharedComponents/Logo/Logo';
import Loading from '../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getSuperAdmins, deleteSuperAdmins } from '../redux/modules/superAdmins/thunks';

const SuperAdmin = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.superadmins.isLoading);
  const superAdminsData = useSelector((state) => state.superadmins.list);
  useEffect(async () => {
    dispatch(getSuperAdmins());
  }, []);

  const deleteItem = (_id) => {
    dispatch(deleteSuperAdmins(_id));
  };

  const handleEdit = (_id) => {
    props.history.push(`/super-admins/Form?=${_id}`);
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className={styles.container}>
      <Logo />
      <h2>Super Admin</h2>
      <Table
        data={superAdminsData}
        headers={['name', 'lastName', 'email', 'password', 'active']}
        handleEdit={handleEdit}
        deleteItem={deleteItem}
      >
        <Button
          type={styles.addSuperAdminBtn}
          handleClick={() => props.history.push('super-admins/formAdd')}
        >
          Add Super Admin
        </Button>
      </Table>
    </section>
  );
};
export default SuperAdmin;
