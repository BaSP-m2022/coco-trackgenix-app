import React, { useEffect } from 'react';
import styles from './admins.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../SharedComponents/Logo/Logo';
import Table from '../SharedComponents/Table';
import Loading from '../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAdmin, deleteAdmin } from '../redux/modules/admins/thunks';
import Button from 'Components/SharedComponents/Button/Button';

const Admins = (props) => {
  const dispatch = useDispatch();
  const dataResponse = useSelector((state) => state.admin.list);
  const isLoading = useSelector((state) => state.admin.isLoading);
  const error = useSelector((state) => state.admin.error);

  useEffect(async () => {
    dispatch(getAdmin());
  }, []);

  const deleteItem = (_id) => {
    const userToDelete = dataResponse.find((user) => user._id === _id);
    dispatch(deleteAdmin(userToDelete));
  };

  let history = useHistory();
  const handleEdit = (_id) => {
    history.push(`/admin/profile/edit?=${_id}`);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <div>There was an error!</div>;
  }

  const role = sessionStorage.getItem('role');

  return (
    <section className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Admins</h2>
      <div>
        {role === 'SUPERADMIN' && (
          <Button
            type={styles.buttonAdd}
            handleClick={() => props.history.push('/super-admins/add-admin')}
          >
            Add Admin
          </Button>
        )}
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
