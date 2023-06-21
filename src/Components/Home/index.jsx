import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGOUT_SUCCESS } from '../../redux/auth/constants';
import { logout } from '../../redux/auth/thunks';
import { Button } from '../Shared';
import styles from './home.module.css'

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const roleName = {
    SUPER_ADMIN: "Super admin",
    ADMIN:"Admin",
    MEMBER: "Member",
    TRAINER: "Trainer",
  }
  const userRole = sessionStorage.getItem('role');

  const onLogout = () => {
    dispatch(logout()).then((response) => {
      if (response.type === LOGOUT_SUCCESS) {
        history.push('/auth/login');
      }
    });
  };

  return (
    <div className={styles.container}>
        <h2>Welcome {roleName[userRole]}!</h2>
        <Button clickAction={onLogout} text="Logout" type="submit"/>
    </div>
  );
};

export default Home;