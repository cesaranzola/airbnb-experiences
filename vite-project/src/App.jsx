import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Cards from './Cards';

import headshot from './assets/katie-zaferes.png'
import star from './assets/star.png'

function App() {
	return (
		<div className="App">
			<Navbar />
			<MainContent />
			<Cards
				img={headshot}
				sell="Sold out"
				star={star}
				rating="5.0"
				span="(6) - USA"
				desc="Life lessons with Katie Zaferes"
				price="From $136"
        per="/ person"
			/>
		</div>
	);
}

export default App;
