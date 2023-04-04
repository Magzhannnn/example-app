import { useDispatch, useSelector } from 'react-redux'
import { isModal } from '../../store/modal/modal-reducer'
import { RootState } from '../../store/rootReducer'
import MyButton from '../MyButton/MyButton';
import styles from './MyModal.module.css';

interface MyModalProps {
	children?: React.ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({
	children,
}) => {
	const dispatch = useDispatch()
	const isModalVal = useSelector((state: RootState) => state.modal);

	const classes = isModalVal
		? `${styles.modal_overflow} ${styles.active}`
		: styles.modal_overflow;

	return (
		<div className={classes}>
			<MyButton
				content='x'
				className={styles.modal_exit}
				onClickHandler={() => dispatch(isModal)}
			/>
			<div className={styles.modal_content}></div>
		</div>
	);
};
export default MyModal;
