import { useSelector } from 'react-redux';
import BooksList from '../components/Books/BooksList';
import {
	selectAllBooks,
	selectAllBooksInfo,
} from '../store/books/books-selector';
import { IBook } from '../types/books';
import Container from '../UI/Container/Container';
import styles from '../components/Books/Books.module.css';

const Books = () => {
	const books: IBook[] = useSelector(selectAllBooks);

	return (
		<Container className={styles.books}>
			<BooksList books={books} />
		</Container>
	);
};
export default Books;
