import React, { Component } from 'react';
import './Tiles.css';
import Tile from '../Tile/Tile';


const dataBase = [
	{
		name: '2018',
		src: './assets/img/telstar.jpg'
	},
	{
		name: '2014',
		src: './assets/img/brazuca.jpg'
	},
	{
		name: '2010',
		src: './assets/img/jabulani.jpg'
	},
	{
		name: '2006',
		src: './assets/img/teamgeist.jpg'
	},
	{
		name: '2002',
		src: './assets/img/fevernova.jpg'
	},
	{
		name: '1998',
		src: './assets/img/tricolore.jpg'
	},
	{
		name: '1994',
		src: './assets/img/questra.jpg'
	},
	{
		name: '1990',
		src: './assets/img/etrusco.jpg'
	}
];

class Tiles extends Component {
   constructor(props) {
      super(props);

      this.state = {
			dataBase
      };
	
      this.getContent = this.getContent.bind(this);
		this.compareArrayElements = this.compareArrayElements.bind(this);
		this.openTile = this.openTile.bind(this);
		this.numberOpenedTilesInOneTry = 0;
		this.openedTile = '';
   }

	compareArrayElements() {
		return  Math.random() - 0.5;
	}

	getContent() {
		let initialContent = this.state.dataBase;
		let doubleInitialContent = initialContent.concat(initialContent);
		let resultContent = doubleInitialContent.sort(this.compareArrayElements);
			return resultContent;
	}

	openTile(e,tiles) {
	let _this = e.target;
	let _thisStyle = e.target.style;		
	let _thisName = e.target.attributes.name.nodeValue;

	if (_this.className === 'tile') {
		_this.classList.add('open');
		this.numberOpenedTilesInOneTry++;
		console.log('this.openedTile:', _thisName, this.numberOpenedTilesInOneTry);
	
		if  (this.numberOpenedTilesInOneTry < 2) {
		
			this.openedTile = _this;
	
		} else if  (this.openedTile.attributes.name.nodeValue === _thisName) {
			console.log('GOOOD TRY!!!');
			this.openedTile.style.borderColor = 'red';
			e.target.style.borderColor = 'red';
			this.numberOpenedTilesInOneTry = 0;
			this.openedTile = '';
	
		} else if  (this.openedTile.attributes.name.nodeValue !== _thisName) {
			console.log('BAD TRY!!!');
			this.numberOpenedTilesInOneTry = 0;
			//закрываем обе плитки
			this.openedTile.classList.remove('open');
			_this.classList.remove('open');
			this.openedTile = '';
		}
	} else {
		console.log('This tile is already opened!');
		this.numberOpenedTilesInOneTry = 0;
	}
}


   render() {

		const rawArray = this.getContent();
		const mappedArray = rawArray.map(tile => (
			<Tile 
				key={Math.random()}
				name={tile.name}
				back={tile.src}
				callback={this.openTile} 
			/>	
		))

      return (
         <div className="content"
				onClick={(e) => this.openTile(e)}>
				{mappedArray}
			</div>	
      );
   }
}

export default Tiles;
