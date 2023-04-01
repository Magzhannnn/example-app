import { useState } from 'react';
import { hasEmptyStrings } from '../../helpers/authFormHelpers';
import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';
import styles from './Auth.module.css';

interface AuthFormProps {
	currLocal: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ currLocal }) => {
	const [user, setUser] = useState({ name: '', email: '', password: '' });

	const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setUser(prev => ({ ...prev, name: e.target.value }));

	const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setUser(prev => ({ ...prev, email: e.target.value }));

	const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setUser(prev => ({ ...prev, password: e.target.value }));

	const clickHandler = (e: React.MouseEvent) => {
		e.preventDefault();

		if (hasEmptyStrings(user)) alert('Error!!!');
		else {
			console.log(user);
			setUser({ name: '', email: '', password: '' });
		}
	};

	const classes = currLocal ? `${styles['auth-form']} ${styles.login}` : styles['auth-form']

	return (
		<form className={classes}>
			{!currLocal && (
				<MyInput
					type='text'
					placeHolder='Name'
					value={user.name}
					onChangeHandler={nameHandler}
				/>
			)}
			<MyInput
				type='email'
				placeHolder='Email'
				value={user.email}
				onChangeHandler={emailHandler}
			/>
			<MyInput
				type='password'
				placeHolder='Password'
				value={user.password}
				onChangeHandler={passwordHandler}
			/>
			<MyButton
				content={currLocal ? 'Sign In' : 'Sign Up'}
				onClickHandler={clickHandler}
			/>
		</form>
	);
};
export default AuthForm;
