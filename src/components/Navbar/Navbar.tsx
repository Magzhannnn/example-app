import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Container from '../../UI/Container/Container';
import {
	ABOUT_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTER_ROUTE,
} from '../../utils/consts';

const Navbar = () => {
	return (
		<div className={styles.navbar_wrap}>
			<Container className={styles.navbar}>
				<div className={styles.navbar_left}>
					<Link to={ABOUT_ROUTE} className={styles.linked}>
						About
					</Link>
					<Link to={HOME_ROUTE} className={styles.linked}>
						Home
					</Link>
				</div>
				<div className={styles.navbar_center}>
					<img src='' alt='' />
				</div>
				<div className={styles.navbar_right}>
					<Link to={LOGIN_ROUTE} className={styles.linked}>
						Login
					</Link>
					<Link to={REGISTER_ROUTE} className={styles.linked}>
						Sign Up
					</Link>
				</div>
			</Container>
		</div>
	);
};
export default Navbar;
