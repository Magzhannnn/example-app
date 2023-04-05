import { useDispatch } from 'react-redux';
import { isModal } from '../../store/modal/modal-reducer';
import MyButton from '../../UI/MyButton/MyButton';
import styles from './Home.module.css';

const HomeModal = () => {
	const dispatch = useDispatch();

	const sendHomeHandler = () => {
		console.log('Sent to email');
		dispatch(isModal);
	};

	return (
		<div className={styles['home-modal']}>
			<div className={styles['home-modal_title']}>Home Modal</div>
			<div className={styles['home-modal_content']}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</div>
			<MyButton content='Send' onClickHandler={sendHomeHandler} />
		</div>
	);
};
export default HomeModal;
