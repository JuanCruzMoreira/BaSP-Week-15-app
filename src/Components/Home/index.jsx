import { useState } from 'react';
import styles from './home.module.css';
import { CustomButton, Modal } from '../Shared';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.container}>
      <h2>Home</h2>
      <div className={styles.buttonContainer}>
        <CustomButton text={'Normal'} clickAction={() => setIsOpen(!isOpen)} />
        <CustomButton text={'Delete'} type={'delete'} />
        <CustomButton text={'Disabled'} disabled />
      </div>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)}>
        <h3>This is a message</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed justo justo. Donec
          nec mi lorem. Aliquam ac magna velit. Phasellus mauris diam, feugiat non congue sed,
          aliquet vitae orci.
        </div>
      </Modal>
    </section>
  );
};

export default Home;
