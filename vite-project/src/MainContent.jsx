import heroImage from './assets/photo-grid.png';

export default function MainContent() {
	return (
		<main>
			<div className="heroImage">
				<img className="gridImage" src={heroImage} alt="" />
			</div>
			<div className='experiencesText'>
				<h2 className='titleOnline'>Online experiences</h2>
				<p className='textOnline'>
					Join unique interactive activities led by one-of-a-kind
					hosts—all without leaving home.
				</p>
			</div>
		</main>
	);
}
