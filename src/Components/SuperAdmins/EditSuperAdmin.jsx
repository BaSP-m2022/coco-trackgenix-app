// import React, { useState } from 'react';
// import styles from './super-admins.module.css';

// const EditSuperAdmin = () => {
//   const [superAdminInput, setSuperAdminInput] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     active: ''
//   });
//   const onChangeInput = (event) => {
//     setSuperAdminInput(event.target.value);
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     setSuperAdminInput({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       active: ''
//     });
//   };
//   const options = {
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

//   return (
//     <div className={styles.container}>
//       <h2>Form</h2>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={superAdminInput.firstName}
//             onChange={onChangeInput}
//           ></input>
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={superAdminInput.lastName}
//             onChangeInput={onChangeInput}
//           ></input>
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             value={superAdminInput.email}
//             onChangeInput={onChangeInput}
//           ></input>
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={superAdminInput.password}
//             onChangeInput={onChangeInput}
//           ></input>
//         </div>
//         <div>
//           <label>Active</label>
//           <input
//             type="text"
//             name="active"
//             value={superAdminInput.active}
//             onChangeInput={onChangeInput}
//           ></input>
//         </div>
//         <div>
//           <input type="submit" value="submit"></input>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditSuperAdmin;
