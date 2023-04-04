import styles from './Home.module.css';
import Header from '../../UI/Header/Header';

const HomeTitle = () => {
	return <Header title='Home Page' className={styles.home_title} />;
};
export default HomeTitle;
