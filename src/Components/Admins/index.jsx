import React, { useEffect, useState } from 'react';
import styles from './admins.module.css';
import Table from '../Shared/Table';
import Button from '../Shared/Button';
import SharedModal from '../Shared/Modal';

import { useHistory } from 'react-router-dom';
import { getAdmins, deleteAdmin } from '../../redux/admins/thunks';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

const Admins = () => {
  const history = useHistory();
  const loading = useSelector((state) => state.admins.loading);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [isDelete, setIsDelete] = useState(false);
  const [typeStyle, setTypeStyle] = useState('');
  const [modalInformation, setModalInformation] = useState({ title: '', body: '' });
  const [idAdmin, setIdAdmin] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    dispatch(getAdmins());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const admins = useSelector((state) => state.admins.data?.data);
  const deleteAdmins = async (id) => {
    setShowModal(false);
    try {
      const data = await dispatch(deleteAdmin(id));
        setAlertMessage(data.message);
        setShowAlert(true);
    } catch (error) {
      setAlertMessage(error.message);
      console.error(error);
    }
  };

  const handleAddAdmin = () => {
    history.push('/super-admin/admins/form');
  };

  const handleUpdateAdmin = (id) => {
    history.push(`/super-admin/admins/form/${id}`);
  };

  const handleDeleteAdmin = (id) => {
    setModalInformation({ title: 'Warning', body: 'Are you sure?' });
    setIsDelete(true);
    setShowModal(true);
    setTypeStyle('default');
    setIdAdmin(id);
  };

  const confirmDelete = () => {
    deleteAdmins(idAdmin);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  const handleExitAlert = () => {
    setShowAlert(false);
    setShowSuccessAlert(false);
  };

  return (
    <section className={styles.adminContainer}>
      <div className={styles.topAdminContainer}>
        <h2>Admins</h2>
        <Button text={'+ Add Admins'} type={'add'} clickAction={handleAddAdmin} />
      </div>
      {loading ? (
        <ClipLoader />
      ) : admins?.length === (0 || undefined) ? (
        <>
          <h3>There are no admins in the database</h3>
        </>
      ) : (
        <>
          <SharedModal
            isDelete={false}
            show={showAlert}
            closeModal={handleExitAlert}
            title={'Something is wrong'}
            body={alertMessage}
          />
          <SharedModal
            isDelete={false}
            show={showSuccessAlert}
            closeModal={handleExitAlert}
            typeStyle={'success'}
            title={'Success'}
            body={alertMessage}
          />
          <SharedModal
            show={showModal}
            typeStyle={typeStyle}
            title={modalInformation.title}
            body={modalInformation.body}
            isDelete={isDelete}
            onConfirm={confirmDelete}
            closeModal={handleCancelDelete}
          />
          <Table
            data={admins}
            properties={['firstName', 'lastName', 'phone', 'email']}
            columnTitles={['First Name', 'Last Name', 'Phone Number', 'Email']}
            handleUpdateItem={handleUpdateAdmin}
            handleDeleteItem={handleDeleteAdmin}
          />
        </>
      )}
    </section>
  );
};
export default Admins;
