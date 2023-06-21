import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './form.module.css';
import Button from '../../Shared/Button';
import SharedModal from '../../Shared/Modal';
import { getAdminById, postAdmin } from '../../../redux/admins/thunks';
import { useDispatch } from 'react-redux';

const Form = () => {
  const history = useHistory();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    phone: '',
    email: '',
    city: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const dispatch = useDispatch();

  const setAdmin = async (id) => {
    try {
      const data = await dispatch(getAdminById(id));
      setFormData({
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        dni: data.data.dni,
        phone: data.data.phone,
        email: data.data.email,
        city: data.data.city,
        password: data.data.password
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      setAdmin(id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      putAdmin(formData, id);
    } else {
      const data = await dispatch(postAdmin(formData));
      console.log(data)
      setAlertMessage(data.message);
      setShowSuccessAlert(true);
    }
  };

  // const handlePostAdmin = async (admin) => {
  //   try {
  //     const data = await dispatch(postAdmin(admin))
  //     if (!response.ok) {
  //       setAlertMessage(data.message);
  //       setShowAlert(true);
  //     } else {
  //       setAlertMessage(data.message);
  //       setShowSuccessAlert(true);
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const putAdmin = async (admin, id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admins/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(admin)
      });
      const data = await response.json();
      if (!response.ok) {
        setAlertMessage(data.message);
        setShowAlert(true);
      } else {
        setAlertMessage(data.message);
        setShowSuccessAlert(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleCancel = () => {
    if (showSuccessAlert) {
      setShowAlert(false);
    }
    setShowAlert(false);
    history.push('/super-admin/admins');
  };

  const handleExitAlert = () => {
    setShowAlert(false);
    setShowSuccessAlert(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>{id ? 'Update Admin' : 'Add Admin'}</h2>
      <SharedModal
        isDelete={false}
        show={showAlert}
        closeModal={handleExitAlert}
        typeStyle={'error'}
        title={'Something is wrong'}
        body={alertMessage}
      />
      <SharedModal
        isDelete={false}
        show={showSuccessAlert}
        closeModal={handleCancel}
        title={'Success'}
        typeStyle={'success'}
        body={alertMessage}
      />
      <form className={styles.formAdmin}>
        <div className={styles.firstInputs}>
          <div className={styles.formInput}>
            <h3 className={styles.h3}>Name</h3>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formInput}>
            <h3 className={styles.h3}>Last Name</h3>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formInput}>
            <h3 className={styles.h3}>DNI</h3>
            <input
              name="dni"
              type="number"
              value={formData.dni}
              placeholder="DNI"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formInput}>
            <h3 className={styles.h3}>Phone</h3>
            <input
              name="phone"
              type="number"
              value={formData.phone}
              placeholder="Phone"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.secondInputs}>
          <div className={styles.formInput}>
            <h3 className={styles.h3}>Email</h3>
            <input
              name="email"
              type="text"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formInput}>
            <h3 className={styles.h3}>City</h3>
            <input
              name="city"
              type="text"
              value={formData.city}
              placeholder="City"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formInput}>
            <h3 className={styles.h3}>Password</h3>
            <input
              name="password"
              type="text"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.buttonsAdmin}>
          <Button text={'Cancel'} type={'cancel'} clickAction={handleCancel} />
          <Button text={'Submit'} type={'submit'} clickAction={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
