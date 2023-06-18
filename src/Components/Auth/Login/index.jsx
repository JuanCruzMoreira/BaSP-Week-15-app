import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../Shared'
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../../../validations/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/auth/thunks';
import styles from './login.module.css';
import { LOGIN_SUCCESS } from '../../../redux/auth/constants';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const error = useSelector((state) => state.auth.error);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(loginSchema),
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    // if (Object.values(errors).length === 0) {
      dispatch(login(data)).then((data) => {
        if (data.type === LOGIN_SUCCESS) {
          console.log(data.payload.role);
          if (data.payload.role === 'SUPER_ADMIN') {
            history.push('/super-admin');
          } else if (data.payload.role === 'ADMIN') {
            history.push('/admin');
          } else {
            history.push('/employee');
          }
        }
      });
  };

  return (
    <div className={styles.loginContainer}>
      {/* {error && <div className={styles.errorContainer}>{error}</div>} */}
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <input register={register} name="email" placeholder="Email" error={errors.email} />
        <input register={register} name="password" placeholder="Password" error={errors.password} />
        <Button type="submit" text="Login" />
      </form>
    </div>
  );
};

export default Login;

// import React from 'react-redux';
// import styles from './Form/loginForm.module.css';
// import Button from '../../Shared/Button';
// import Modal from '../../Shared/Modal';
// import { useState } from 'react';

// const Login = () => {
//   const [user, setUser] = useState({
//     email: '',
//     password: ''
//   })
//   const [showModal, setShowModal] = useState(false);
//   const [typeStyle, setTypeStyle] = useState('');
//   const [titleModal, setTitleModal] = useState('');
//   const [bodyModal, setBodyModal] = useState('');

//   const url = 'https://api-rest-server.vercel.app/login'

//   const onChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${url}?email=${user.email}&password=${user.password}`);
//       const data = await response.json();
//       if (response.ok) {
//         setShowModal(true);
//         setTitleModal('Success');
//         setBodyModal(data.message);
//         alert('Employee logged');
//       } else {
//         throw new Error('Wrong email or password')
//       }
//     } catch (error) {
//       console.log(error);
//       setShowModal(true);
//       setBodyModal(error.message);
//       setTitleModal('error');
//       setTypeStyle('error');

//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className={styles.container}>
//       <form className={styles.formContainer}>
//         <input
//           label="Email"
//           id="email"
//           type="text"
//           placeholder="Enter your email"
//           name="email"
//           onChange={onChange}
//         />
//         <input
//           label="Password"
//           id="password"
//           type="password"
//           placeholder="Enter your password"
//           name="password"
//           onChange={onChange}
//         />
//         <div className={styles.submitButton}>
//           <Button type="submit" clickAction={onSubmit} text="Login" />
//         </div>
//       </form>
//       {showModal && (
//             <Modal
//               show={showModal}
//               typeStyle={typeStyle}
//               title={titleModal}
//               body={bodyModal}
//               closeModal={handleCloseModal}
//             />
//           )}    </div>
//   );
// };

// export default Login;