import React, { useState, useEffect } from 'react';
import styles from '../employees.module.css';
import Logo from '../../SharedComponents/Logo/Logo';
import Modal from '../../SharedComponents/Modal/Modal';
import Button from '../../SharedComponents/Button/Button';
import Input from '../../SharedComponents/Input/Input';
import Loading from '../../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { editEmployee } from '../../redux/modules/employees/thunks';

const FormEmployeeEdit = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState();
  const [status, setStatus] = useState();

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState('');

  const [showWarning1, setShowWarning1] = useState(false);
  const [showWarning2, setShowWarning2] = useState(false);
  const [showWarning3, setShowWarning3] = useState(false);
  const [showWarning4, setShowWarning4] = useState(false);
  const [showWarning5, setShowWarning5] = useState(false);
  const [showWarning6, setShowWarning6] = useState(false);

  const isLoadingEmployee = useSelector((state) => state.employee.isLoading);

  const params = window.location.search;
  let id = params.substring(2);

  const url = `https://coco-trackgenix-server.vercel.app/employees/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setActive(response.data.active);
      });
  }, []);

  const formEmployee = (e) => {
    dispatch(editEmployee(e, id, setStatus, setModalText));
    setIsOpen(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const employeeToEdit = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
      active: active
    };
    formEmployee(employeeToEdit);
  };

  const detour = (status) => {
    if (status == 'Status 200') {
      props.history.push('/employees');
    } else {
      setIsOpen(false);
    }
  };

  const checkEmployee = () => {
    let result;
    if (status == 'Status 200') {
      result = 'Are you sure you want to edit the employee data?';
    } else {
      result = 'Fields filled incorrectly, please check the data';
    }
    return result;
  };

  const handleInput1 = (e) => {
    setFirstName(e.target.value);
    if (e.target.value === '') {
      setShowWarning1(true);
    } else {
      setShowWarning1(false);
    }
  };

  const handleInput2 = (e) => {
    setLastName(e.target.value);
    if (e.target.value === '') {
      setShowWarning2(true);
    } else {
      setShowWarning2(false);
    }
  };

  const handleInput3 = (e) => {
    setPhone(e.target.value);
    if (e.target.value === '') {
      setShowWarning3(true);
    } else {
      setShowWarning3(false);
    }
  };

  const handleInput4 = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setShowWarning4(true);
    } else {
      setShowWarning4(false);
    }
  };

  const handleInput5 = (e) => {
    setPassword(e.target.value);
    if (e.target.value === '') {
      setShowWarning5(true);
    } else {
      setShowWarning5(false);
    }
  };

  const handleInput6 = (e) => {
    setActive(e.target.value);
    if (e.target.value === '') {
      setShowWarning6(true);
    } else {
      setShowWarning6(false);
    }
  };

  const handleClick1 = () => {
    setShowWarning1(false);
  };

  const handleClick2 = () => {
    setShowWarning2(false);
  };

  const handleClick3 = () => {
    setShowWarning3(false);
  };

  const handleClick4 = () => {
    setShowWarning4(false);
  };

  const handleClick5 = () => {
    setShowWarning5(false);
  };

  const handleClick6 = () => {
    setShowWarning6(false);
  };

  const handleBlurInput1 = (e) => {
    if (e.target.value === '') {
      setShowWarning1(true);
    }
  };

  const handleBlurInput2 = (e) => {
    if (e.target.value === '') {
      setShowWarning2(true);
    }
  };

  const handleBlurInput3 = (e) => {
    if (e.target.value === '') {
      setShowWarning3(true);
    }
  };

  const handleBlurInput4 = (e) => {
    if (e.target.value === '') {
      setShowWarning4(true);
    }
  };

  const handleBlurInput5 = (e) => {
    if (e.target.value === '') {
      setShowWarning5(true);
    }
  };

  const handleBlurInput6 = (e) => {
    if (e.target.value === '') {
      setShowWarning6(true);
    }
  };

  if (isLoadingEmployee) {
    return <Loading className={styles.loadText}></Loading>;
  }

  return (
    <div className={styles.formAdd}>
      <Logo />
      <div>
        <h2>Edit Employee</h2>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <Input
              labelText="Name"
              name="firstName"
              inputValue={firstName}
              placeholder="First Name"
              warningMsg="Please check the information"
              handleInput={handleInput1}
              handleClick={handleClick1}
              handleBlur={handleBlurInput1}
              showWarning={showWarning1}
            />
          </div>
          <div>
            <Input
              labelText="Last Name"
              name="lastName"
              inputValue={lastName}
              placeholder="Last Name"
              warningMsg="Please check the information"
              handleInput={handleInput2}
              handleClick={handleClick2}
              handleBlur={handleBlurInput2}
              showWarning={showWarning2}
            />
          </div>
          <div>
            <Input
              labelText="Phone"
              name="phone"
              inputValue={phone}
              placeholder="Phone"
              warningMsg="Please check the information"
              handleInput={handleInput3}
              handleClick={handleClick3}
              handleBlur={handleBlurInput3}
              showWarning={showWarning3}
            />
          </div>
          <div>
            <Input
              labelText="Email"
              name="email"
              inputValue={email}
              placeholder="Email"
              warningMsg="Please check the information"
              handleInput={handleInput4}
              handleClick={handleClick4}
              handleBlur={handleBlurInput4}
              showWarning={showWarning4}
            />
          </div>
          <div>
            <Input
              labelText="Password"
              name="password"
              inputValue={password}
              placeholder="Password"
              warningMsg="Please check the information"
              handleInput={handleInput5}
              handleClick={handleClick5}
              handleBlur={handleBlurInput5}
              showWarning={showWarning5}
            />
          </div>
          <div>
            <Input
              labelText="Active"
              name="active"
              inputValue={active}
              placeholder="Active"
              warningMsg="Please check the information"
              handleInput={handleInput6}
              handleClick={handleClick6}
              handleBlur={handleBlurInput6}
              showWarning={showWarning6}
            />
          </div>
          <div>
            <input className={styles.addEmployeeBtn} type="submit" value="submit" />
          </div>
        </form>
        <Button type={styles.addEmployeeBtn} handleClick={() => props.history.push('/employees')}>
          Return
        </Button>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{checkEmployee(modalText)}</p>
        </div>
        <div>
          <Button type={styles.modalEmployeeBtn} handleClick={() => detour(status)}>
            Confirm
          </Button>
          <Button
            type={styles.modalEmployeeBtn}
            handleClick={() => props.history.push('/employees')}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FormEmployeeEdit;
