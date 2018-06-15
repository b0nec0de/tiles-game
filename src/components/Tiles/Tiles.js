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
         dataBase,
			counter: 0
      };

      this.getContent = this.getContent.bind(this);
		this.compareArrayElements = this.compareArrayElements.bind(this);
		this.resetAllTiles = this.resetAllTiles.bind(this);
      this.openTile = this.openTile.bind(this);
   }

   resetAllTiles() {
		let opened = document.getElementsByClassName('opened');
		let sliced = [].slice.call(opened);
		sliced.forEach(function(item) {
			item.style.transform = 'rotateY(0deg)';
			item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
		})	
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
		let _thisBackstyle = e.target.attributes[3].nodeValue;
		
			_thisStyle.transform = "rotateY(180deg)";
			_thisStyle.transition = "1s";
			_thisStyle.backgroundImage = 'url(' + _thisBackstyle + ')';
			_this.className = 'tile opened';

			let opened = document.getElementsByClassName('opened');
			let sliced = [].slice.call(opened);

		
			//если открыли 2 плитки и они разные
		if (sliced.length === 2 && sliced[0].name !== sliced[1].name) {

			sliced.forEach(function(item) {
				item.style.transform = 'rotateY(0deg)';
				item.style.transition = '1s';
				item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
			})
		}			
   };

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
