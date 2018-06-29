import React from "react";
import './App.css';
import Tiles from '../Tiles/Tiles';
import Counter from '../Counter/Counter';

function App() {

	return (
		<div className="app">
			<header className="app-header">
				<Counter />
			</header>
			<div className="container">
				<Tiles />
			</div>
		</div>
	);	
}

export default App;
