import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetTries } from '../../actions/index';
import './Counter.css';

class Counter extends Component {
	constructor() {
		super();

		this.resetAllTiles = this.resetAllTiles.bind(this);
	};

	resetAllTiles() {
		let opened = document.getElementsByClassName('open');
		let sliced = [].slice.call(opened);
			
		if (opened !== undefined) {
			sliced.forEach(function (item) {
				item.style.transform = 'rotateY(0deg)';
				item.style.transition = "1.1s";
				item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
				item.classList.remove('open');
			});	
			this.props.resetTries();
		} else {
			
			this.props.resetTries();
		}		
	}

	render() {
		return (
			<div className="Counter">
				<div className="сounter-area">
					Number of Attempts :<span className="number">{this.props.counter}</span>
				</div>
				<button
					className="button reset"
					type="button"
					onClick={() => this.resetAllTiles()}
				>
					Reset
            </button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		resetTries: () => dispatch(resetTries)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
