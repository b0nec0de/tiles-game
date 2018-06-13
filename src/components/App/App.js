import React, { Component } from "react";
import './App.css';
import Tile from '../Tile/Tile';
import icon from '../../icon.png';

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

		this.getContent = this.getContent.bind(this);
		this.compareArrayElements = this.compareArrayElements.bind(this);
		// this.getRandomTile = this.getRandomTile.bind(this); 
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

	// getRandomTile() {
	// 	let initialContent = this.state.dataBase;
	// 	let randomTile = initialContent[Math.floor(Math.random() * initialContent.length)];
	// 		return randomTile;
	// }

	compareArrayElements() {
		return  Math.random() - 0.5;
	}

	getContent() {
		let initialContent = this.state.dataBase;
		let doubleInitialContent = initialContent.concat(initialContent);
		let resultContent = doubleInitialContent.sort(this.compareArrayElements);
	
		return resultContent;
	}


	render() {

		// let initialContent = this.state.dataBase;
		// let doubleInitialContent = initialContent.concat(initialContent);
		// let resultContent = doubleInitialContent.sort(this.compareArrayElements)
		const array = this.getContent();
		
		return (
			<div className="App">
				<header className="App-header">
				<img src={icon} className="App-logo" alt="logo" />
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
							array.map(tile => (
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
