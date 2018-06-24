import React, { Component } from "react";
import './App.css';
import Tiles from '../Tiles/Tiles';
import Counter from '../Counter/Counter';

class App extends Component {
	
	render() {
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
}

export default App;
