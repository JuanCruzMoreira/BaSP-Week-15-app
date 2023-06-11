import React, { useState, useEffect } from 'react';
import styles from './activities.module.css';

const Activities = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    console.log('es verdadero', light);
  }, [light]);

  return (
    <section className={styles.container}>
      <h2>Activities</h2>
      <button onClick={() => setLight(!light)}>Change</button>
      <p>{light ? 'Encendida' : 'Apagada'}</p>
    </section>
  );
};

export default Activities;
