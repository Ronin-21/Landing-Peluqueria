import { GREAT_VIBES, MARTEL, POPPINS } from '@/constants/fonts';
import './globals.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const RootLayout = ({ children }) => {
	return (
		<html
			lang='es'
			className={`${GREAT_VIBES.variable} ${MARTEL.variable} ${POPPINS.variable}`}>
			<body suppressHydrationWarning={true}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
