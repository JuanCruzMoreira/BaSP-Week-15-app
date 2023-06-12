import Header from '../Header/index';
import styles from './layout.module.css';
import Routes from '../../Routes';
import SideBar from '../SideBar';

const Layout = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.mainContent}>
        <Header />
        <Routes />
      </div>
    </div>
  );
};

export default Layout;
