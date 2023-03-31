import { useLocation } from 'react-router-dom';
import Container from '../UI/Container/Container';
import { LOGIN_ROUTE } from '../utils/consts';

const Auth = () => {
	const location = useLocation();
	const currLocal = location.pathname === LOGIN_ROUTE;

	return (
		<Container>
			<div>{currLocal ? 'Login' : 'Sign Up'}</div>
		</Container>
	);
};
export default Auth;
