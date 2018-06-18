import React, { Component } from "react";
import './App.css';
import Tiles from '../Tiles/Tiles';
import Counter from '../Counter/Counter';

class App extends Component {

	getData = (data) => {
		
	}

	render() {
		return (
			<div className="App">
				<header className="app-header">
					<Counter />
				</header>
				<div className="container">
					<Tiles 
						hook={this.getData}
					/>
				</div>
			</div>
		);
	}
}

export default App;
