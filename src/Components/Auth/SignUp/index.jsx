// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { signUpEmployee } from '../../../redux/auth/thunks';
// import { SIGN_UP_SUCCESS } from '../../../redux/auth/constants';
// import styles from './signup.module.css';
// import { Button, TextInput, Spinner } from '../../Shared';

// const Form = () => {
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const isLoading = useSelector((state) => state.auth.isLoading);
//   const [employeeInput, setEmployeeInput] = useState({
//     name: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: ''
//   });

//   const onChange = (e) => {
//     setEmployeeInput({ ...employeeInput, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async () => {
//     const res = await dispatch(signUpEmployee(employeeInput));
//     if (res.type === SIGN_UP_SUCCESS) {
//       history.push('/auth/login');
//     }
//   };

//   if (isLoading) {
//     return <Spinner isLoading={isLoading} />;
//   }

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Register employee</h1>
//       <form className={styles.form} onSubmit={onSubmit}>
//         <TextInput
//           label="Name"
//           id="name"
//           name="name"
//           value={employeeInput.name}
//           onChange={onChange}
//           type="text"
//           placeholder="Name"
//         />
//         <TextInput
//           label="Last Name"
//           id="lastName"
//           name="lastName"
//           value={employeeInput.lastName}
//           onChange={onChange}
//           type="text"
//           placeholder="Last Name"
//         />
//         <TextInput
//           label="Phone"
//           id="phone"
//           name="phone"
//           value={employeeInput.phone}
//           onChange={onChange}
//           type="text"
//           placeholder="Phone"
//         />
//         <TextInput
//           label="Email"
//           id="email"
//           name="email"
//           value={employeeInput.email}
//           onChange={onChange}
//           type="text"
//           placeholder="Email"
//         />
//         <TextInput
//           label="Password"
//           id="password"
//           name="password"
//           value={employeeInput.password}
//           onChange={onChange}
//           type="password"
//           placeholder="Password"
//         />
//         <div className={styles.butCont}>
//           <Button
//             text="Cancel"
//             type="reset"
//             variant="secondary"
//             onClick={() => {
//               history.goBack();
//             }}
//           />
//           <Button text="Submit" type="submit" variant="primary" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;
