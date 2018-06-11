import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isOpened: false
      }
   }

   render() {
      return (
         <div className="tile-row__link">
            <button className="tile-row__link"></button>
         </div>   	
      );
   }
}

export default Tile;
