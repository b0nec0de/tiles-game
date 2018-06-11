import React from 'react';
import Tile from '../Tile/Tile';
import './Tiles.css';

const Tiles = (props) => {
   let tilesArr = [];
		for (let i=0; i<16; i++) {
			tilesArr.push(<Tile content={props.initial} />)
      }
      
   return (
      <div className="container">
         <div className="wrapper">
            <div className="content">
               <div className="tile-row"> 
                  {tilesArr}
               </div>
            </div>
         </div>
      </div>  
   );
};

export default Tiles;
