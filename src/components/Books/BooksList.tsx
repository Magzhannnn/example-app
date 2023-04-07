import styles from "./Books.module.css"
import { IBook } from '../../types/books';
import BooksItem from './BooksItem'

interface BooksListProps {
	books: IBook[];
}

const BooksList: React.FC<BooksListProps> = ({ books }) => {
	console.log(books)

	return <div className={styles["book-list"]}>{books.map(book => <BooksItem book={book} key={book.id} />)}</div>;
};
export default BooksList;
