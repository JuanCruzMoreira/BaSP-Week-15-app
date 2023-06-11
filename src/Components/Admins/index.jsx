import { useEffect, useState } from 'react';
import styles from './admins.module.css';
import Table from './Table';
import Form from './Form';
import { Modal } from '../Shared';

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [idToEdit, setIdToEdit] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getAdmins = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admins`);
      const data = await response.json();
      setAdmins(data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAdmins();
  }, []);

  const onClickButton = () => {
    setIsAdding(!isAdding);
    setIsEditing(false);
    setIsOpen(!isOpen);
  };

  const actionItem = async (data) => {
    let url = `${process.env.REACT_APP_API_URL}/api/admins`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    if (isEditing) {
      options.method = 'PUT';
      url = `${url}/${idToEdit}`;
    }
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.status !== 200 && response.status !== 201) {
        throw new Error(data.message);
      }
      alert(data.message);
      setIsEditing(false);
      setIsAdding(false);
    } catch (error) {
      alert(error);
    }
  };

  const deleteItem = async (id) => {
    if (confirm('Are u sure??')) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admins/${id}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        if (data?.error) {
          throw new Error(data.message);
        }
        alert(data.message);
        setAdmins([...admins.filter((user) => user._id !== id)]);
      } catch (error) {
        alert(error);
      }
    }
  };

  const editItem = (id) => {
    setIsEditing(true);
    setIsAdding(false);
    setIdToEdit(id);
  };

  return (
    <section className={styles.container}>
      <h2>admins</h2>
      <Table data={admins} editItem={editItem} deleteItem={deleteItem} isEditing={isEditing} />
      <button className={styles.button} onClick={onClickButton}>
        +
      </button>
      {/* <Button clickAction={onClickButton} text="Add" disabled /> */}
      {(isAdding || isEditing) && (
        <Modal isOpen={isOpen} handleClose={onClickButton}>
          <h3>Add an admin</h3>
          <Form actionItem={actionItem} isEditing={isEditing} idToEdit={idToEdit} />
        </Modal>
      )}
    </section>
  );
};

export default Admins;
