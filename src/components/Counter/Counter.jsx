import React from 'react';
import { connect } from 'react-redux';
import { resetTries } from '../../actions/index';
import './Counter.css';

function Counter({ counter, resetTries }) {
	
	const resetAllTiles = () => {
		let opened = document.getElementsByClassName('open'),
			 sliced = [].slice.call(opened);
			
		if (opened !== undefined) {
			sliced.forEach(function (item) {
				item.style.transform = 'rotateY(0deg)';
				item.style.transition = "1.1s";
				item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
				item.classList.remove('open');
			});
			setTimeout(()=>{
				resetTries();  
			 }, 1200)
		} else {
			resetTries();
		}		
	}

		return (
			<div className="counter">
				<div className="сounter-area">
					number of attempts :<span className="number">{counter}</span>
				</div>
				<button
					className="button reset"
					type="button"
					onClick={() => resetAllTiles()}
				>
					Reset
            </button>
			</div>
		);
	
};

const mapStateToProps = state => {
	return {
		counter: state.counter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		resetTries: () => dispatch(resetTries())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
