import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isOpened: false
      }

      this.openTile = this.openTile.bind(this);
   }

   openTile() {
      
     
      this.setState = ({
         isOpened: true
      })
      
      
   }

   render() {
       
      return (
         <div>
            <button className="tile"></button>    
         </div>      	
      );
   }
}

export default Tile;
