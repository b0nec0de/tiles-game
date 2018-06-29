import React from 'react';
import { connect } from 'react-redux';
import { incrementTries, resetTries } from '../../actions/index';
import './Tiles.css';
import Tile from '../Tile/Tile';


class Tiles extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.mapContent = this.mapContent.bind(this);
		this.openTile = this.openTile.bind(this);
		this.numberOpenedTilesInOneTry = 0;
		this.openedTile = '';
	}

	componentDidMount() {
		this.props.resetTries();
	}

	openTile(e) {
		let _this = e.target,
			_thisStyle = e.target.style,
			_thisName = e.target.attributes.name.nodeValue,
			_thisBackstyle = e.target.attributes[3].nodeValue;

		if (!_this.classList.contains('open')) {
			_thisStyle.transform = "rotateY(360deg)";
			_thisStyle.transition = "1.1s";
			_thisStyle.backgroundImage = 'url(' + _thisBackstyle + ')';
			_this.classList.add('open');

			this.numberOpenedTilesInOneTry++;

			if (this.numberOpenedTilesInOneTry < 2) {
				this.openedTile = _this;

			} else if (this.openedTile.attributes.name.nodeValue === _thisName) {

				this.numberOpenedTilesInOneTry = 0;
				this.openedTile = '';

			} else if (this.openedTile.attributes.name.nodeValue !== _thisName) {
				_this.classList.add('wrong');
				this.openedTile.classList.add('wrong');

				let wronged = document.getElementsByClassName('wrong'),
					sliced = [].slice.call(wronged);

				setTimeout(function () {
					sliced.forEach(function (item) {
						item.style.transform = 'rotateY(0deg)';
						item.style.transition = "1.1s";
						item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
						item.classList.remove('open', 'wrong');
					})
				}, 1200);

				this.openedTile.classList.remove('open', 'wrong');
				this.props.incrementTries();
	
				this.numberOpenedTilesInOneTry = 0;
				this.openedTile = '';
			}
		}
	}

	mapContent() {
	return this.props.tiles.map(tile => (
			<Tile
				key={Math.random()}
				name={tile.name}
				back={tile.src}
				callback={this.openTile}
			/>
		));
	}

	render() {

		return (
			<div className="content"
				onClick={(e) => this.openTile(e)}>
				{this.mapContent()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		tiles: state.tiles
	};
};


const mapDispatchToProps = dispatch => {
	return {
		incrementTries: () => dispatch(incrementTries()),
		resetTries: () => dispatch(resetTries())
	};
};



export default connect(mapStateToProps,  mapDispatchToProps)(Tiles);
