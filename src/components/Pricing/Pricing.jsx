import './Pricing.scss';
import imgPricing from '../../../public/images/gallery2.jpg';
import imgBackground from '../../../public/images/prices.jpg';
import Image from 'next/image';
import MyButton from '../Common/MyButton/MyButton';

const Pricing = () => {
	return (
		<section className='pricing-section'>
			<div className='img-container'>
				<Image src={imgPricing} alt='img' className='img-prices' />
				<Image src={imgBackground} alt='img' className='img-background' />
			</div>
			<div className='content'>
				<h4>Services & Prices</h4>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
					reprehenderit dolor aliquid quas asperiores eaque officia temporibus sunt
					voluptate distinctio iste fugit nisi inventore
				</p>
				<div className='prices'>
					<div className='content-prices'>
						<p className='title'>WOMEN</p>
						<div className='prices-container'>
							<div className='prices-titles'>
								<p>Styling</p>
								<p>Styling + Color</p>
								<p>Styling + Tint</p>
								<p>Semi-Permanent Wave</p>
								<p>Cut + Styling</p>
								<p>Cut + Styling + Color</p>
								<p>Cut + Styling + Tint</p>
							</div>
							<div className='money'>
								<p>$25</p>
								<p>$65</p>
								<p>$65</p>
								<p>$65</p>
								<p>$63</p>
								<p>$100</p>
								<p>$100</p>
							</div>
						</div>
					</div>
					<div className='content-prices'>
						<p className='title'>MEN</p>
						<div className='prices-container'>
							<div className='prices-titles'>
								<p>Cut</p>
								<p>Shave</p>
								<p>Beard Trim</p>
								<p>Cut + Beard Trim</p>
								<p>Cut + Shave</p>
								<p>Clean Up</p>
							</div>
							<div className='money'>
								<p>$25</p>
								<p>$30</p>
								<p>$15</p>
								<p>$24</p>
								<p>$35</p>
								<p>$15</p>
							</div>
						</div>
					</div>
				</div>
				<MyButton newClass='price-btn'>Reserva tu turno</MyButton>
			</div>
		</section>
	);
};
export default Pricing;
