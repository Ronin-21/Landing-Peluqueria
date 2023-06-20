import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import './Navbar.scss';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import {
	FaTwitter,
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
} from 'react-icons/fa';
import { navLinks } from '@/constants/navlinks';

const Navbar = () => {
	return (
		<>
			<div className='sub-navbar'>
				<div className='sub-navbar-container'>
					<div className='sub-navbar-logo'>
						<Image src={logo} alt='logo' />
						<a href='/'>
							<h3>Peluquería</h3>
						</a>
					</div>
					<div className='info-contact'>
						<div>
							<MdLocationOn />
							<p>Sarmiento 512</p>
						</div>
						<div>
							<MdPhone />
							<p>+54 9 3858 156235</p>
						</div>
						<div>
							<MdEmail />
							<p>ejemplo@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
			<nav className='navbar'>
				<div className='navbar-container'>
					<div className='navbar-links'>
						{navLinks.map((item) => (
							<a href={item.path} key={item.path}>
								{item.title}
							</a>
						))}
					</div>
					<div className='navbar-social'>
						<a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
							<FaFacebookF />
						</a>
						<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
							<FaInstagram />
						</a>
						<a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
							<FaTwitter />
						</a>
						<a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
							<FaWhatsapp />
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
