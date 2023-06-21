import React from 'react-redux';
import styles from './loginForm.module.css';
import Button from '../../../Shared/Button';
import Modal from '../../../Shared/Modal';
import { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [showModal, setShowModal] = useState(false);
  const [typeStyle, setTypeStyle] = useState('');
  const [titleModal, setTitleModal] = useState('');
  const [bodyModal, setBodyModal] = useState('');

  const url = 'https://api-rest-server.vercel.app/login'

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}?email=${user.email}&password=${user.password}`);
      const data = await response.json();
      if (response.ok) {
        setShowModal(true);
        setTitleModal('Success');
        setBodyModal(data.message);
        alert('Employee logged');
      } else {
        throw new Error('Wrong email or password')
      }
    } catch (error) {
      console.log(error);
      setShowModal(true);
      setBodyModal(error.message);
      setTitleModal('error');
      setTypeStyle('error');

    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <input
          label="Email"
          id="email"
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={onChange}
        />
        <input
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={onChange}
        />
        <div className={styles.submitButton}>
          <Button type="submit" clickAction={onSubmit} text="Login" />
        </div>
      </form>
      {showModal && (
        <Modal
          show={showModal}
          typeStyle={typeStyle}
          title={titleModal}
          body={bodyModal}
          closeModal={handleCloseModal}
        />
      )}    </div>
  );
};

export default Form;
