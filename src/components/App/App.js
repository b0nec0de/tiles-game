import React, { Component } from "react";
import './App.css';
import Tile from '../Tile/Tile';
import '../Tile/Tile.css';

const dataBase = [
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
			dataBase
		};

		this.compareArrayElements = this.compareArrayElements.bind(this);
		this.getRandomTile = this.getRandomTile.bind(this); 
		// this.resetAllTiles = this.resetAllTiles.bind(this);
	}

	// resetAllTiles() {

	// 	location.reload();
	// 	let opened = document.getElementsByClassName('opened');
	// 	let sliced = [].slice.call(opened);
	// 	sliced.forEach(function(item) {
	// 		item.style.transform = 'rotateY(0deg)';
	// 		item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
	// 	})
	// }

	getRandomTile() {
		let initialContent = this.state.dataBase;
		let randomTile = initialContent[Math.floor(Math.random() * initialContent.length)];
			return randomTile;
	}

	compareArrayElements() {
		return  Math.random() - 0.5;
	}

	render() {

		let initialContent = this.state.dataBase;
		let doubleInitialContent = initialContent.concat(initialContent);
		let resultContent = doubleInitialContent.sort(this.compareArrayElements)
		
		return (
			<div className="App">
				<header className="App-header">
					<button 
						className="button" 
						type="button"
						onClick={() => window.location.reload()}
					>
					Reset
					</button>
				</header>
				<div className="container">
					<div className="content">
						{
							resultContent.map(tile => (
								<Tile 
									key={tile.id}
									name={tile.name}
									back={tile.src} 
								/>	
							))
						}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
