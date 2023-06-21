import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../redux/auth/thunks';
import { Button } from '../Shared';
import styles from './home.module.css'

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userRole = sessionStorage.getItem('role')

  const onLogout = async () => {
    try {
      const res = await dispatch(logOut());
      if (!res.error) {
        history.push('/auth/login');
      }
    } catch (error) {
      console.error(`Nt pipi ${error}`)
    }
  };

  const roleName = {
    SUPER_ADMIN: "Super admin",
    ADMIN: "Admin",
    MEMBER: "Member",
    TRAINER: "Trainer",
  }

  return (
    <div className={styles.container}>
      <h2>Welcome {roleName[userRole]}!</h2>
      <Button clickAction={onLogout} text="Logout" type="submit" />
    </div>
  );
};

export default Home;