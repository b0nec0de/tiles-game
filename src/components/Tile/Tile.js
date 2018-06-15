import React, { Component } from 'react';
import './Tile.css';


class Tile extends Component {
   constructor(props) {
      super(props);

      this.state = {
			isOpened: false
      };

      this.openTile = this.openTile.bind(this);
   }

   openTile(e,tiles) {
			
		let _this = e.target;
		let _thisStyle = e.target.style;
			
			_thisStyle.transform = "rotateY(180deg)";
			_thisStyle.transition = "1s";
			_thisStyle.backgroundImage = 'url(' + tiles + ')';
			_this.className = 'tile opened';

			let opened = document.getElementsByClassName('opened');
			let sliced = [].slice.call(opened);
			
			this.setState({
				isOpened: true
			});
		
			//если открыли 2 плитки и они разные
		if (sliced.length === 2 && sliced[0].name !== sliced[1].name) {

			sliced.forEach(function(item) {
				item.style.transform = 'rotateY(0deg)';
				item.style.transition = '1s';
				item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
			})
		
			this.setState({
				isOpened: false,
				counter: this.props.count + 1
			})
		}			
   };
	
   render() { 
   
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
				name={this.props.name} 
				back={this.props.back}
				key={this.props.id}
				style={defaultStyle}
				onClick={(e) => this.openTile(e,this.props.back)}
			>
			</button>          	
      );
   }
}

export default Tile;


