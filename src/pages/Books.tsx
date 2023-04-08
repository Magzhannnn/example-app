import { useSelector } from 'react-redux';
import BooksList from '../components/Books/BooksList';
import {
	selectAllBooks,
	selectAllBooksInfo,
} from '../store/books/books-selector';
import { IBook } from '../types/books';
import Container from '../UI/Container/Container';
import styles from '../components/Books/Books.module.css';
import { selectBooksLoading } from '../store/books/books-selector';

const Books = () => {
	const books: IBook[] = useSelector(selectAllBooks);
	const loading = useSelector(selectBooksLoading);

	return (
		<Container className={styles.books}>
			{loading ? (
				<h1 className='loading'>Loading...</h1>
			) : (
				<BooksList books={books} />
			)}
		</Container>
	);
};
export default Books;
