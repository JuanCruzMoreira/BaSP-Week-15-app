import styles from './button.module.css';

const Button = ({ clickAction, text, type, disabled = false }) => {
  return (
    <button
      type="button"
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

export default Button;
