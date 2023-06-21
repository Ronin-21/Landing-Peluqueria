import { navLinks } from '@/constants/navlinks';
import Image from 'next/image';
import logo from '../../../public/images/logo.webp';
import ContactInfo from '../Common/ContactInfo/ContactInfo';
import SocialMedia from '../Common/SocialMedia/SocialMedia';
import './Navbar.scss';

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
					<ContactInfo />
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
					<SocialMedia />
				</div>
			</nav>
		</>
	);
};
export default Navbar;
