import styles from './Books.module.css';
import { IBook } from '../../types/books';
import BookItemContent from './BookItemContent';

interface BookSelectLeftProps {
	currBook: IBook;
}

const BookSelectLeft: React.FC<BookSelectLeftProps> = ({ currBook }) => {
	return (
		<div className={styles['book-select_left']}>
			<BookItemContent
				title='Name'
				content={currBook?.name as string}
				className={styles['book-select_content']}
			/>
			<BookItemContent
				title='Year publisher'
				content={currBook?.year.toString() as string}
				className={styles['book-select_content']}
			/>
			<BookItemContent
				title='Genre'
				content={currBook?.genre as string}
				className={styles['book-select_content']}
			/>
			<BookItemContent
				title='Page'
				content={currBook?.page.toString() as string}
				className={styles['book-select_content']}
			/>
			<BookItemContent
				title='Price'
				content={currBook?.price.toString() as string}
				className={styles['book-select_content']}
			/>
			<BookItemContent
				title='Author'
				content={currBook?.author as string}
				className={styles['book-select_content']}
			/>
			<BookItemContent
				title='Description'
				content={currBook?.description as string}
				className={styles['book-select_content']}
			/>
		</div>
	);
};
export default BookSelectLeft;
