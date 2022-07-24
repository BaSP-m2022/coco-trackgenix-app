import React, { useState } from 'react';
import styles from 'Components/Admins/admins.module.css';
import Button from 'Components/SharedComponents/Button/Button';
import Modal from 'Components/SharedComponents/Modal/Modal';
import Logo from 'Components/SharedComponents/Logo/Logo';
import Input from 'Components/SharedComponents/Input/Input';
import Loading from 'Components/SharedComponents/Loading/Loading';
import Dropdown from 'Components/SharedComponents/Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { addMember } from 'Components/redux/modules/members/thunks';
import { useEffect } from 'react';
import { getProjectById } from 'Components/redux/modules/projects/thunks';

const memberSchema = Joi.object({
  employee: Joi.string()
    .required()
    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
    .messages({
      'string.pattern.base': 'Select a valid employee',
      'string.required': 'Employee is required'
    }),
  role: Joi.string().required().valid('DEV', 'QA', 'PM', 'TL', 'UI/UX').messages({
    'string.required': 'Role is required',
    'string.valid': 'Must contain a valid role'
  }),
  rate: Joi.number().positive().precision(2).required().messages({
    'number.positive': 'Must be positive',
    'number.precision': 'Rate must have a maximum of two decimals',
    'number.required': 'Rate is required!'
  })
});

const MemberForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [memberInput, setMemberInput] = useState({});
  const [showButton, setShowButton] = useState(true);
  const [successMember, setSuccessMember] = useState(false);
  const [modalText, setModalText] = useState();
  const employeeData = useSelector((state) => state.employee.list);
  const projectData = useSelector((state) => state.project.selectedItem);
  const isLoading = useSelector((state) => state.member.isLoading);

  const params = window.location.search;
  let id = params.substring(2);

  useEffect(() => {
    dispatch(getProjectById(id));
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: joiResolver(memberSchema) });

  const dispatch = useDispatch();

  const memberForm = (e) => {
    dispatch(addMember(e, setModalText, setShowButton, setSuccessMember));
    setIsOpen(true);
    if (successMember) {
      setMemberInput({
        employee: '',
        role: '',
        rate: ''
      });
    }
  };
  const onSubmit = (member) => {
    setMemberInput({
      ...memberInput,
      employee: member.employee,
      role: member.role,
      rate: member.rate
    });
    setModalText('Are you sure you want to create a new member ?');
    setIsOpen(true);
  };

  const employeesInThisProject = () => {
    return employeeData.filter(
      (employee) => !projectData.members?.find((member) => member.employee._id === employee._id)
    );
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.formContainer}>
        <h2 className={styles.titleTwo}>Add new Member</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsColumns}>
            <Dropdown
              data={employeesInThisProject()}
              name="employee"
              labelText="Select an employee"
              register={register}
              error={errors.employee?.message}
            ></Dropdown>
            <Dropdown
              data={['DEV', 'QA', 'PM', 'TL', 'UI/UX']}
              name="role"
              labelText="Select a role"
              path="firstName"
              register={register}
              error={errors.role?.message}
            ></Dropdown>
            <Input
              labelText="Set a rate"
              name="rate"
              type="number"
              placeholder="Rate"
              register={register}
              error={errors.rate?.message}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <Button type={('submit', styles.confirmAndDeleteBtn)}>Add</Button>
            <Button type={styles.confirmAndDeleteBtn} handleClick={() => props.history.goBack()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <Modal showModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div>
          <p>{modalText}</p>
        </div>
        <div>
          <Button
            type={
              showButton && !successMember
                ? styles.confirmAndDeleteBtn
                : styles.confirmAndDeleteBtnNone && styles.confirmBtnNone
            }
            handleClick={() => memberForm(memberInput)}
          >
            Confirm
          </Button>
          <Button
            type={styles.confirmAndDeleteBtn}
            handleClick={() => {
              if (!showButton && successMember) {
                setShowButton(true);
                setSuccessMember(false);
                props.history.push('/admin/projects');
              } else {
                setShowButton(true);
                setSuccessMember(false);
                setIsOpen(false);
              }
            }}
          >
            {showButton && !successMember ? 'Cancel' : 'Ok'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MemberForm;
