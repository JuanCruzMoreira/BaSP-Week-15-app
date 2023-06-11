import React from 'react';
import styles from './custom-button.module.css';

const CustomButton = ({ text, clickAction, type, disabled }) => {
  return (
    <button
      onClick={clickAction}
      className={
        type === 'delete' ? `${styles.normalButton} ${styles.deleteButton}` : styles.normalButton
      }
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
