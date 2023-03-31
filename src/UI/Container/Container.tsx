import styles from './Container.module.css';

interface ContainerrProps {
	className?: string;
	children: React.ReactNode;
}

const Container: React.FC<ContainerrProps> = ({ children, className }) => {
	const classes = !className
		? styles.container
		: `${styles.container} ${className}`;

	return <div className={classes}>{children}</div>;
};
export default Container;
