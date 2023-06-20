import MyButton from '../Common/MyButton/MyButton';
import './Contact.scss';

const Contact = () => {
	return (
		<section className='contact-section'>
			<div className='contact-map'></div>
			{/* <GoogleMap zoom={15} center={center} mapContainerClassName='contact-map'>
				<Marker position={center} />
			</GoogleMap> */}
			<div className='contact-content'>
				<h4>Services & Prices</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis
					adipisci quae repellendus. Ipsum corporis est tenetur illo illum dicta,
					quas id similique atque doloremque ad fuga nesciunt, consequatur ipsa.
				</p>
				<form action=''>
					<input type='text' placeholder='Nombre' />
					<input type='email' placeholder='Email' />
					<input type='tel' placeholder='Teléfono' />
					<select id=''>
						<option defaultValue={true} disabled={true}>
							Haircut
						</option>
						<option value={''}>Styling</option>
						<option value={''}>Styling + Color</option>
						<option value={''}>Styling + Tint</option>
						<option value={''}>Semi-Permanent Wave</option>
						<option value={''}>Cut</option>
						<option value={''}>Shave</option>
						<option value={''}>Beard Trim</option>
						<option value={''}>Cut + Beard Trim</option>
						<option value={''}>Cut + Shave</option>
						<option value={''}>Clean Up</option>
					</select>
					<input type='date' />
					<MyButton newClass='contact-btn'>Reserva tu turno</MyButton>
				</form>
			</div>
		</section>
	);
};
export default Contact;
