import React, { Component } from "react";
import "./App.css";
import Tiles from '../Tiles/Tiles';

const initialContent = [
	{
		name: '2018',
		id: Math.random(),
		src: './assets/img/telstar.jpg'
	},
	{
		name: '2014',
		id: Math.random(),
		src: './assets/img/brazuca.jpg'
	},
	{
		name: '2010',
		id: Math.random(),
		src: './assets/img/jabulani.jpg'
	},
	{
		name: '2006',
		id: Math.random(),
		src: './assets/img/teamgeist.jpg'
	},
	{
		name: '2002',
		id: Math.random(),
		src: './assets/img/fevernova.jpg'
	},
	{
		name: '1998',
		id: Math.random(),
		src: './assets/img/tricolore.jpg'
	},
	{
		name: '1994',
		id: Math.random(),
		src: './assets/img/questra.jpg'
	},
	{
		name: '1990',
		id: Math.random(),
		src: './assets/img/etrusco.jpg'
	}
];

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			initialContent: initialContent
		};

		this.handlePickTileContent = this.handlePickTileContent.bind(this); 
	}

	handlePickTileContent() {
		let wholeContent = this.state.initialContent;
		let randomTile = wholeContent[Math.floor(Math.random() * wholeContent.length)];

			return randomTile;
	}

	// if(!selectedContent.includes(randomTile)) {
		// 	let plusTile = selectedContent.concat([randomTile])
		// 	console.log(plusTile);
		// } else {

	render() {
		
		return (
			<div className="App">
				<header className="App-header">
					<button className="button" type="button">Reset</button>
				</header>
				<Tiles initial={this.state.initialContent}
						 random={this.handlePickTileContent}
				/>			
			</div>
		);
	}
}

export default App;
