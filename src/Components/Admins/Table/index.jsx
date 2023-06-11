import React from 'react';
import styles from './table.module.css';
// import { Button } from '../../Shared/';

const Table = ({ data, editItem, deleteItem }) => {
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Dni</th>
          <th>Phone</th>
          <th>City</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.dni}</td>
              <td>{item.phone}</td>
              <td>{item.city}</td>
              <td>
                <button className={styles.editButton} onClick={() => editItem(item._id)}>
                  Edit
                </button>
                {/* <Button clickAction={() => editItem(item._id)} text={'Edit'} /> */}
              </td>
              <td>
                <button className={styles.deleteButton} onClick={() => deleteItem(item._id)}>
                  X
                </button>
                {/* <Button clickAction={() => deleteItem(item._id)} text={'X'} type={'delete'} /> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
