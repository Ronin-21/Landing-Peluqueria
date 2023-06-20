import Image from 'next/image';
import MyButton from '../Common/MyButton/MyButton';
import aboutImg from '../../../public/images/about.jpg';
import './About.scss';

const About = () => {
	return (
		<section className='about-section'>
			<div className='about-container'>
				<h4>Welcome to My Hair Salon</h4>
				<div className='about-content'>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quas dicta
						consectetur, necessitatibus laudantium labore autem cupiditate,
						perferendis natus eligendi at ad, sed recusandae totam quidem a id vitae
						officia? Commodi laborum quod officia, quaerat natus iure, et ipsa modi
						nisi voluptatum, eveniet maxime repudiandae quidem vitae in.
					</p>
					<MyButton>Reserva tu turno</MyButton>
				</div>
				<Image src={aboutImg} alt='about' className='about-image' />
			</div>
		</section>
	);
};
export default About;
