import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Shared/Button'
import Input from '../../Shared/Input'
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../../../validations/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/thunks';
import styles from './login.module.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(loginSchema),
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    if (Object.values(errors).length === 0) {
        dispatch(login(data)).then((data) => {
          const role = data.payload.role;
          switch (role) {
            case 'SUPER_ADMIN':
              history.push('/super-admin');
              break;
            case 'ADMIN':
              history.push('/admin');
              break;
            case 'MEMBER':
              history.push('/member');
              break;
            case 'TRAINER':
              history.push('/trainer');
              break;
            default:
              history.push('/auth/login');
            }
      });
    };
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          labelName={'Email'}
          inputType={'text'}
          inputName={'email'}
          placeholder="Email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          labelName={'Password'}
          inputType={'text'}
          inputName={'password'}
          placeholder="Password"
          error={errors.password?.message}
        />
        <Input register={register} name="email" placeholder="Email" error={errors.email} />
        <Input register={register} name="password" placeholder="Password" error={errors.password} />
        <Button type="submit" text="Login" />
      </form>
    </div>
  );
};

export default Login;