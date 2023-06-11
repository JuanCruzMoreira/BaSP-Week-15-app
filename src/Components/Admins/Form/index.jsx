import React, { useEffect, useState } from 'react';
import styles from './form.module.css';

const Form = ({ actionItem, isEditing, idToEdit }) => {
  const [admin, setAdmin] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dni: '',
    phone: '',
    city: '',
    password: ''
  });

  const getAdminById = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admins/${idToEdit}`);
      const data = await response.json();
      if (data?.error) {
        throw new Error(data.message);
      }
      setAdmin({
        firstName: data?.data?.firstName,
        lastName: data?.data?.lastName,
        email: data?.data?.email,
        dni: data?.data?.dni,
        phone: data?.data?.phone,
        city: data?.data?.city,
        password: data?.data?.password
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    isEditing
      ? getAdminById()
      : setAdmin({
          firstName: '',
          lastName: '',
          email: '',
          dni: '',
          phone: '',
          city: '',
          password: ''
        });
  }, [isEditing, idToEdit]);

  const onChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    actionItem(admin);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.subContainer}>
        {Object.entries(admin).map((item) => {
          const [key, value] = item;
          return (
            <div className={styles.inputContainer} key={key}>
              <label className={styles.label}>{key}</label>
              <input
                className={styles.input}
                name={key}
                type="text"
                value={value}
                onChange={onChange}
              />
            </div>
          );
        })}
      </div>
      <button className={styles.button} type="submit">
        {isEditing ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
