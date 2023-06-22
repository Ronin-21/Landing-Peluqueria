import { GREAT_VIBES, MARTEL, POPPINS } from '@/constants/fonts';
import './globals.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'Mi Peluqueria',
	description: 'Landing Page de un salon de peluqueria, creado con Next Js',
	keywords: ['Next.js', 'React', 'JavaScript'],
	authors: [{ name: 'Abel Acuña', url: 'https://ronin-webdesign.vercel.app/' }],
};

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
