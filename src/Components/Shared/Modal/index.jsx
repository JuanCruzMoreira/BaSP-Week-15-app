import React from 'react';
import styles from './modal.module.css';

const Modal = ({ children, isOpen, handleClose }) => {
  return isOpen ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrapper}>
        <button onClick={handleClose} className={styles.closeButton}>
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
