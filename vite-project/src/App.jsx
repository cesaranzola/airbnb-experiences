import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Cards from './Cards';
import data from './data';
import star from '../public/images/star.png';

export default function App() {
	const cards = data.map((item) => {
		return <Cards key={item.id} {...item} star={star} />;
	});

	return (
		<div>
			<Navbar />
			<Hero />
			<section className="cards-list">{cards}</section>
		</div>
	);
}
