import { SERVICES } from '@/constants/cardServices';
import MyButton from '../Common/MyButton/MyButton';
import Image from 'next/image';
import './OurServices.scss';

const OurServices = () => {
	return (
		<section className='services-section'>
			<h4>Our Services</h4>
			<div className='services-content'>
				{SERVICES.map((card, index) => {
					return (
						<div className='card' key={index}>
							<Image src={card.image} alt='card-img' />
							<div className='card-content'>
								<h6>{card.title}</h6>
								<MyButton>Reserva tu turno</MyButton>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default OurServices;
