import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isOpen: false
      }

      this.openTile = this.openTile.bind(this);
   }

   openTile(e,tiles) {
      let _this = e.target;
      let _thisStyle = e.target.style; 
      _thisStyle.transform = "rotateY(180deg)";
      _thisStyle.transition = "1s";
      _thisStyle.backgroundImage = 'url(' + tiles + ')';
      _this.classList.add('opened');
      
      
      this.setState = ({
         isOpen: true
      }) 
   }

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


