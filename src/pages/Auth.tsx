import { useLocation } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import Container from '../UI/Container/Container';
import Header from '../UI/Header/Header';
import { LOGIN_ROUTE } from '../utils/consts';

const Auth = () => {
	const location = useLocation();
	const currLocal = location.pathname === LOGIN_ROUTE;

	return (
		<Container>
			<Header title={currLocal ? 'Login' : 'Sign Up'} />
			<AuthForm currLocal={currLocal} />
		</Container>
	);
};
export default Auth;
