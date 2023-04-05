import styles from './Footer.module.css';
import Container from '../../UI/Container/Container';

const Footer = () => {
	return (
		<div className={styles.footer_wrap}>
			<Container className={styles.footer}>
				<div className={styles['footer-corp']}>©Mellysoft</div>
				<div className={styles['footer-country']}>Kazakhstan</div>
				<div className={styles['footer-year']}>2017</div>
			</Container>
		</div>
	);
};
export default Footer;
