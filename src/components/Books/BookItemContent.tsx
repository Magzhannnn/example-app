import styles from './Books.module.css';

interface BookItemContentProps {
	title: string;
	content: string;
}

const BookItemContent: React.FC<BookItemContentProps> = ({
	title,
	content,
}) => {
	return (
		<div className={styles['book-item_title']}>
			<span>{title}:</span> {content}
		</div>
	);
};
export default BookItemContent;
