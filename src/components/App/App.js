import React, { Component } from "react";
import "./App.css";
import Tiles from '../Tiles/Tiles';

const initialContent = [
	{
		id: '01',
		url: '../../assets/telstar.jpg'
	},
	{
		id: '02',
		url: '../../assets/brazuca.jpg'
	},
	{
		id: '03',
		url: '../../assets/jabulani.jpg'
	},
	{
		id: '04',
		url: '../../assets/teamgeist.jpg'
	},
	{
		id: '05',
		url: '../../assets/feronova.jpg'
	},
	{
		id: '06',
		url: '../../assets/tricolore.jpg'
	},
	{
		id: '07',
		url: '../../assets/etrusco.jpg'
	},
	{
		id: '08',
		url: '../../assets/azteca.jpg'
	},
];

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			initialContent	
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
