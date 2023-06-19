import './globals.scss';

const RootLayout = ({ children }) => {
	return (
		<html lang='es'>
			<body>
				<header>
					<nav></nav>
				</header>
				{children}
				<footer></footer>
			</body>
		</html>
	);
};

export default RootLayout;
