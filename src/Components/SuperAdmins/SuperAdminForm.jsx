import React, { useState } from 'react';
import styles from './super-admins.module.css';

const EditSuperAdmin = () => {
  const [superAdminInput, setSuperAdminInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    active: ''
  });
  const onChangeInput = (event) => {
    setSuperAdminInput(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setSuperAdminInput({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      active: ''
    });
  };
  // const options = {
  //   method: 'PUT',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     firstName: superAdminInput.firstName,
  //     lastName: superAdminInput.lastName,
  //     email: superAdminInput.email,
  //     password: superAdminInput.password,
  //     active: superAdminInput.active
  //   })
  // };

  const updateItem = (_id) => {
    try {
      const response = fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins/${_id}`, {
        method: 'PUT'
      });
      console.log(response);
      alert('Se eliminooooo');
    } catch (error) {
      console.error(error);
    }
    setList(list.filter((listItem) => listItem._id !== _id));
  };

  return (
    <div className={styles.container}>
      <h2>Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="firstName"
            value={superAdminInput.firstName}
            onChange={onChangeInput}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={superAdminInput.lastName}
            onChangeInput={onChangeInput}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={superAdminInput.email}
            onChangeInput={onChangeInput}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={superAdminInput.password}
            onChangeInput={onChangeInput}
          ></input>
        </div>
        <div>
          <label>Active</label>
          <input
            type="text"
            name="active"
            value={superAdminInput.active}
            onChangeInput={onChangeInput}
          ></input>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default EditSuperAdmin;

// import React, { useState } from 'react';
// import styles from './super-admins.module.css';

// const SuperAdminForm = () => {
//   const [firstNameValue, setFirstNameValue] = useState('');
//   // const onChangeFNameInput = (event) => {
//   //   setFirstNameValue(event.target.value);
//   // };
//   const [lastNameValue, setLastNameValue] = useState('');
//   // const onChangeLNameInput = (event) => {
//   //   setLastNameValue(event.target.value);
//   // };
//   const [emailValue, setEmailValue] = useState('');
//   // const onChangeEmailInput = (event) => {
//   //   setEmailValue(event.target.value);
//   // };
//   const [passwordValue, setPasswordValue] = useState('');
//   // const onChangePassInput = (event) => {
//   //   setPasswordValue(event.target.value);
//   // };
//   const [activeValue, setActiveValue] = useState('');
//   // const onChangeActiveInput = (event) => {
//   //   setActiveValue(event.target.value);
//   // };

//   return (
//     <div className={styles.container}>
//       <h2>Form</h2>
//       <form>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={firstNameValue}
//             onChange={(event) => setFirstNameValue(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={lastNameValue}
//             onChangeInput={(event) => setLastNameValue(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             value={emailValue}
//             onChangeInput={(event) => setEmailValue(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={passwordValue}
//             onChangeInput={(event) => setPasswordValue(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label>Active</label>
//           <input
//             type="text"
//             name="active"
//             value={activeValue}
//             onChangeInput={(event) => setActiveValue(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <input type="submit" value="submit"></input>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SuperAdminForm;
