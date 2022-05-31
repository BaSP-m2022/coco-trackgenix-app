import React, { useState } from 'react';
import styles from './super-admins.module.css';

const EditSuperAdmin = () => {
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  // const onChangeInput = (event) => {
  //   setSuperAdminInput(event.target.value);
  //   console.log(event.target.value);
  // };
  // const addSuperAdmin = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:4000/super-admins/form`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         name: superAdminInput.firstName,
  //         lastName: superAdminInput.lastName,
  //         email: superAdminInput.email,
  //         password: superAdminInput.password,
  //         active: true
  //       })
  //     });
  //     const data = await res.json();
  //     setSuperAdminInput([...superAdminInput, data]);
  //     return data;
  //   } catch (error) {
  //     alert('error');
  //   }
  // };
  const onSubmit = (event) => {
    event.preventDefault();

    const addSuperAdmin = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        active: active
      })
    };
    const url = `https://coco-trackgenix-server.vercel.app/Superadmins`;

    fetch(url, addSuperAdmin)
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .then((data) => console.log('data:', data));

    // fetch(url, addSuperAdmin).then((response) => {
    //   if (response.status !== 200 && response.status !== 201) {
    //     return response.json().then(({ message }) => {
    //       throw new Error(message);
    //     });
    //   }
    //   // const data = response.json();
    //   console.log(response.json());
    //   return response.json();
    // });
  };
  return (
    <div className={styles.container}>
      <h2>Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => setlastName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Active</label>
          <input
            type="text"
            name="active"
            value={active}
            onChange={(event) => setActive(event.target.value)}
          ></input>
        </div>
        <button
          // className={styles.btn}
          // onMouseDown={() => {
          //   method('PUT');
          // }}
          type="submit"
        >
          Accept
        </button>
      </form>
    </div>
  );
};
export default EditSuperAdmin;

//   setSuperAdminInput({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     active: ''
//   });
// };

//   const putSuperAdmin = {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       firstName: superAdminInput.firstName,
//       lastName: superAdminInput.lastName,
//       email: superAdminInput.email,
//       password: superAdminInput.password,
//       active: superAdminInput.active
//     })
//   };
//   const url = `https://coco-trackgenix-server.vercel.app/SuperAdmins/${_id}`;

// };

// const onSubmit = async (_id) => {
//   try{
//     const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins/${_id}`, {
//   method: 'PUT',
//   headers: {
//     'Content-type': 'application/json'
//   }
//   body: JSON.stringify({
//     firstName: superAdminInput.firstName,
//     lastName: superAdminInput.lastName,
//     email: superAdminInput.email,
//     password: superAdminInput.password,
//     active: superAdminInput.active
//   })
//   });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deleteItem = async (_id) => {
//   try {
//     const response = await fetch(`https://coco-trackgenix-server.vercel.app/SuperAdmins/${_id}`, {
//       method: 'DELETE'
//     });
//     console.log(response);
//     setList(list.filter((listItem) => listItem._id !== _id));
//     alert('Se eliminooooo');
//   } catch (error) {
//     console.error(error);
//   }
// };

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
