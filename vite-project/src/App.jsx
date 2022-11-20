import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Cards from './Cards';
import data from './data';
import star from '../public/images/star.png';

function App() {
	const cardEle = data.map((item) => {
		return <Cards id={item.id} item={item} star={star} />;
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
