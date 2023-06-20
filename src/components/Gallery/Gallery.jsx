import { GALLERY } from '@/constants/galleryImages';
import Image from 'next/image';
import './Gallery.scss';

const Gallery = () => {
	return (
		<section className='gallery-section'>
			<div className='gallery-container'>
				<h4>Our Works</h4>
				<div className='gallery-content'>
					{GALLERY.map((image, index) => {
						return (
							<Image
								className='gallery-image'
								src={image}
								key={index}
								alt='gallery-img'
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default Gallery;
