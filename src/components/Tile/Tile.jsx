import React from 'react';
import './Tile.css';

function Tile(props) {

	const defaultStyle = {
		backgroundImage: 'url(./assets/img/cup.jpg)',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
	}

	return (
		<button 
			type="button" 
			className="tile"
			name={props.name} 
			back={props.back}
			key={props.id}
			style={defaultStyle}
		>
		</button>      		
	);
};

export default Tile;
