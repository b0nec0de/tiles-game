import React from 'react';
import Tile from '../Tile/Tile';
import './Tiles.css';

const Tiles = (props) => {

   return (
      <div className="container">
         <Tile random={props.random} />  
      </div>  
   );
};

export default Tiles;
