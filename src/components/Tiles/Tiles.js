import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementTries } from '../../actions/index';
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
		name: '1970',
		src: './assets/img/telstar_old.jpg'
	},
	{
		name: '1994',
		src: './assets/img/questra.jpg'
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
	let _thisBackstyle = e.target.attributes[3].nodeValue;

		if (_this.className === 'tile') {
			_thisStyle.transform = "rotateY(360deg)";
			_thisStyle.transition = "1.1s";
			_thisStyle.backgroundImage = 'url(' + _thisBackstyle + ')';
			_this.classList.add('open');
		
			this.numberOpenedTilesInOneTry++;
			console.log('this.openedTile:', _thisName, this.numberOpenedTilesInOneTry);
		
			if  (this.numberOpenedTilesInOneTry < 2) {
				this.openedTile = _this;
		
			} else if  (this.openedTile.attributes.name.nodeValue === _thisName) {
				console.log('GOOOD TRY!!!');
				this.numberOpenedTilesInOneTry = 0;
				this.openedTile = '';
		
			} else if  (this.openedTile.attributes.name.nodeValue !== _thisName) {
				console.log('BAD TRY!!!');
				_this.classList.add('wrong');
				this.openedTile.classList.add('wrong');

				let wronged = document.getElementsByClassName('wrong');
				let sliced = [].slice.call(wronged);

				setTimeout(function() {
					sliced.forEach(function(item) {
						item.style.transform = 'rotateY(0deg)';
						item.style.transition = "1.1s";
						item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
					})
				},1500);	
				
				_this.classList.remove('open', 'wrong');
				this.openedTile.classList.remove('open', 'wrong');
				this.props.incrementTries();			
				this.numberOpenedTilesInOneTry = 0;
				this.openedTile = '';
			}
		}	
		// } else {
		// 	console.log('This tile is already opened!');
		// 	e.target.style.borderColor = '#e45028';
		// 	this.numberOpenedTilesInOneTry = 0;
		// }
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

const mapDispatchToProps = dispatch => {
	return {
		incrementTries: () => dispatch(incrementTries) 
	};
};

export default connect (null, mapDispatchToProps)(Tiles);
