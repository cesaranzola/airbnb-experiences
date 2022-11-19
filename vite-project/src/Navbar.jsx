import AirbnbLogo from './assets/airbnb-logo.png';

export default function Navbar() {
	return (
		<nav>
			<img  className='logo' src={AirbnbLogo} alt="" />
		</nav>
	);
}
