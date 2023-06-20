import Image from 'next/image';
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import logo from '../../../public/images/logo.svg';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='footer-logo'>
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
			<hr className='footer-linea' />
			<div className='footer-contact'>
				<div className='footer-social'>
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
				<p className='footer-copyrights'>
					&copy; Copyright 2023 By Abel Alejandro Acuña
				</p>
				<p className='footer-horarios'>
					Lunes a Viernes - 9:00 a 13:00 - 17:00 a 21:00
				</p>
			</div>
		</footer>
	);
};
export default Footer;
