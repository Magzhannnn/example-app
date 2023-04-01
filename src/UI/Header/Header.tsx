import styles from './Header.module.css';

interface HeaderProps {
	title: string;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
	const classes = !className ? styles.header : `${styles.header} ${className}`;

	return <div className={classes}>{title}</div>;
};
export default Header;
