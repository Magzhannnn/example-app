import styles from './MyButton.module.css';

interface MyButtonProps {
	content: string;
	className?: string;
	onClickHandler: (e: React.MouseEvent) => void;
}

const MyButton: React.FC<MyButtonProps> = ({
	content,
	className,
	onClickHandler,
}) => {
	const classes = !className
		? styles.my_button
		: `${styles.my_button} ${className}`;

	return (
		<button onClick={onClickHandler} className={classes}>
			{content}
		</button>
	);
};
export default MyButton;
