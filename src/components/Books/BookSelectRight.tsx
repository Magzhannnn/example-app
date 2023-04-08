import styles from './Books.module.css';
import bookImage from '../../image/book2.jpeg';

const BookSelectRight = () => {
	return (
		<div>
			<img src={bookImage} alt=''  className={styles['book-select_right']} />
		</div>
	);
};
export default BookSelectRight;
