import './MyButton.scss';

const MyButton = ({ children, newClass }) => {
	return <button className={`btn ${newClass}`}>{children}</button>;
};
export default MyButton;
