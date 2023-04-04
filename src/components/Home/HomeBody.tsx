import styles from './Home.module.css';
import HomeBodyLeft from './HomeBodyLeft';
import HomeBodyRight from './HomeBodyRight';

const HomeBody = () => {
	return (
		<div className={styles['home-body']}>
			<HomeBodyLeft />
			<HomeBodyRight />
		</div>
	);
};
export default HomeBody;
