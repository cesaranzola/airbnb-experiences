import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Cards from './Cards';
import data from './data';
import star from '../public/images/star.png';

function App() {
	const cardEle = data.map((item) => {
		return (
			<Cards
				title={item.title}
				price={item.price}
				coverImg={item.coverImg}
				rating={item.stats.rating}
				reviewCount={item.stats.reviewCount}
				location={item.location}
				star={star}
				openSpots={item.openSpots}
			/>
		);
	});
	return (
		<div className="App">
			<Navbar />
			<MainContent />
			{cardEle}
		</div>
	);
}

export default App;
