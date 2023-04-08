import styles from './Books.module.css';

interface BookItemContentProps {
	title: string;
	content: string;
	className?: string;
}

const BookItemContent: React.FC<BookItemContentProps> = ({
	title,
	content,
	className,
}) => {
	const classes = !className
		? styles['book-item_title']
		: `${styles['book-item_title']}} ${className}`;

	return (
		<div className={classes}>
			<span>{title}:</span> {content}
		</div>
	);
};
export default BookItemContent;
