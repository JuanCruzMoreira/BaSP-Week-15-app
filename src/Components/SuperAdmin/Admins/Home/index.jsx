import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { LOGOUT_SUCCESS } from '../../../redux/auth/constants';
// import { logout } from '../../../redux/auth/thunks';
import { Button } from '../../Shared';

const Home = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const onLogout = () => {
  //   dispatch(logout()).then((response) => {
  //     if (response.type === LOGOUT_SUCCESS) {
  //       history.push('/auth/login');
  //     }
  //   });
  // };

  return (
    <div>
      {/* <Button onClick={onLogout} text="Logout" /> */}
      <Button text="Logout" />
    </div>
  );
};

export default Home;