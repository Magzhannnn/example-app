import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCurrentBook } from '../../store/books/books-selector';
import { RootState } from '../../store/rootReducer';
import { IBook } from '../../types/books';
import Container from '../../UI/Container/Container';
import MyButton from '../../UI/MyButton/MyButton';
import BookItemContent from './BookItemContent';
import styles from './Books.module.css';
import BookSelectLeft from './BookSelectLeft';
import BookSelectRight from './BookSelectRight';

const BookItemSelect = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const currBook = useSelector((state: RootState) =>
		selectCurrentBook(state, +(id as string))
	);

	return (
		<Container>
			<MyButton
				className={styles['book-select_exit']}
				content='←'
				onClickHandler={() => navigate('/books')}
			/>
			<div className={styles['book-select_title']}>Book{currBook?.id}</div>
			<div className={styles['book-select_body']}>
				<BookSelectLeft currBook={currBook as IBook} />
				<BookSelectRight />
			</div>
			<MyButton content='Add' onClickHandler={() => alert('Add Book')} className={styles['book-select_addBtn']} />
		</Container>
	);
};
export default BookItemSelect;
