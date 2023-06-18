import Header from '../Header/index';
import styles from './layout.module.css';
import SideBar from '../SideBar';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <SideBar routes={props.routes}/>
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.center}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
