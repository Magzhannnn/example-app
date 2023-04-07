import styles from './Books.module.css';
import { IBook } from '../../types/books';
import book1 from '../../image/book2.jpeg';

interface BooksItemProps {
	book: IBook;
}

const BooksItem: React.FC<BooksItemProps> = ({ book }) => {
	return (
		<div className={styles['book-item']}>
			<div
				className={`${styles['book-item_category']} ${
					styles[book.category.toLowerCase()]
				}`}
			>
				{book.category}
			</div>
			<div>
				<img src={book1} alt='book1' className={styles['book-item_img']} />
			</div>
			<div className={styles['book-item_name']}>
				<span>Name:</span> {book.name}
			</div>
			<div className={styles['book-item_year']}>
				<span>Year publisher:</span> {book.year}
			</div>
			<div className={styles['book-item_page']}>
				<span>Page:</span> {book.page}
			</div>
			<div className={styles['book-item_price']}>
				<span>Price:</span> {book.price}
			</div>
			<div className={styles['book-item_author']}>
				<span>Author:</span> {book.author}
			</div>
		</div>
	);
};
export default BooksItem;
