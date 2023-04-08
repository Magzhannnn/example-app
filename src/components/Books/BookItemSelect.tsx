import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCurrentBook } from '../../store/books/books-selector';
import { RootState } from '../../store/rootReducer';
import Container from '../../UI/Container/Container';
import MyButton from '../../UI/MyButton/MyButton';
import styles from './Books.module.css';

const BookItemSelect = () => {
	const { id } = useParams();
	const navigate = useNavigate()

	const currBook = useSelector((state: RootState) =>
		selectCurrentBook(state, +(id as string))
	);
	console.log(currBook);

	return (
		<Container>
			<MyButton
				className={styles['book-select_exit']}
				content="←"
				onClickHandler={() => navigate('/books')}
			/>
		</Container>
	);
};
export default BookItemSelect;
