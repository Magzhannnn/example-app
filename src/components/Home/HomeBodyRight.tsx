import styles from './Home.module.css';
import home from '../../image/home.jpeg';

const HomeBodyRight = () => {
	return (
		<div>
			<img src={home} alt='homeImage' className={styles['home-body_img']} />
		</div>
	);
};
export default HomeBodyRight;
