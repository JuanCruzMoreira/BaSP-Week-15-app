import React, { useState } from 'react';
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
  const [userInput] = useState('');
  const [employeeInput, setEmployeeInput] = useState({
    email: '',
    password: '',
  });
  // const error = useSelector((state) => state.auth.error);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: userInput.email,
      password: userInput.password
    }
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(login(employeeInput));
      if (res.type === LOGIN_SUCCESS) {
        if (res.payload.role === 'SUPER_ADMIN') {
          history.push('/super-admin');
        } else if (res.payload.role === 'MEMBER') {
          history.push('/member');
        } else if (res.payload.role === 'ADMIN') {
          history.push('/admin');
        }
      }
    } catch (error) {
      console.error('Salio mal pipi')
    }
  };

  const onChange = (e) => {
    setEmployeeInput({ ...employeeInput, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.loginContainer}>
      {/* {error && <div className={styles.errorContainer}>{error}</div>} */}
      <form className={styles.formContainer}>
        <input onChange={onChange} name="email" placeholder="Email" error={errors.email} />
        <input onChange={onChange} name="password" placeholder="Password" error={errors.password} />
        <Button type="submit" text="Login" clickAction={(e) => onSubmit(e)} />
        {/* <button onClick={(e) => onSubmit(e)}>login</button> */}
      </form>
    </div>
  );
};

export default Login;