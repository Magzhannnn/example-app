import styles from './Books.module.css';
import { IBook } from '../../types/books';
import book1 from '../../image/book2.jpeg';
import BookItemContent from './BookItemContent';
import { useDispatch } from 'react-redux';
import { isModal } from '../../store/modal/modal-reducer';
import MyModal from '../../UI/MyModal/MyModal';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BooksItemProps {
	book: IBook;
}

const BooksItem: React.FC<BooksItemProps> = ({ book }) => {
	const navigate = useNavigate();

	const bookItemModalHandler = () => {
		navigate(`${book.id}`);
	};

	return (
		<div className={styles['book-item']} onClick={bookItemModalHandler}>
			<div
				className={`${styles['book-item_category']} ${
					styles[book.category.toLowerCase()]
				}`}
			>
				{book.category}
			</div>
			<div>
				<img
					src={book1}
					alt='book1'
					className={styles['book-item_img']}
					data-name={book.name}
				/>
			</div>
			<BookItemContent title='Name' content={book.name} />
			<BookItemContent title='Year publisher' content={book.year.toString()} />
			<BookItemContent title='Page' content={book.page.toString()} />
			<BookItemContent title='Price' content={book.price.toString()} />
			<BookItemContent title='Author' content={book.author} />
		</div>
	);
};
export default BooksItem;
