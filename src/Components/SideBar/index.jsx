import React from 'react';
import styles from './sideBar.module.css';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <aside>
      <nav>
        <ul className={styles.routes}>
          {props.routes.map((route) => (
            <li key={route.name}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
