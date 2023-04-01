import styles from './MyInput.module.css';

interface MyInputProps {
	type: string;
	className?: string;
	placeHolder?: string;
	value: string | number;
	onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<MyInputProps> = ({
	type,
	className,
	placeHolder,
	value,
	onChangeHandler,
}) => {
	const classes = !className ? styles.my_input : `${styles.my_input} ${className}`;

	return (
		<input
			className={classes}
			type={type}
			placeholder={!placeHolder ? '' : placeHolder}
			value={value}
			onChange={onChangeHandler}
		/>
	);
};
export default MyInput;
