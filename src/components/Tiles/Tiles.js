import React from 'react';

import './Tiles.css';

const Tiles = (props) => {
    
   let randomArr = [];
   for (let i=0; i<16; i++) {
      randomArr.push(props.random())
   }

   const divStyle = (src) => ({
      backgroundImage: 'url(' + src + ')'
   })

   return (
      <div className="container">
         <div className="wrapper">
            <div className="content">
               <div className="tile-row"> 
                  {
                     randomArr.map(tile => (
                        
                        <button 
                           key={tile.id}
                           className="tile"
                           style={divStyle(tile.url)}
                        >
                           {tile.name}
                        </button>              
                     ))
                  }
               </div>
            </div>
         </div>
      </div>  
   );
};

export default Tiles;
