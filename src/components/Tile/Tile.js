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
      
      let randomArr = [];
      for (let i=0; i<16; i++) {
         randomArr.push(this.props.randommore())
      }

      const divStyle = (url) => ({
         backgroundImage: 'url(' + url + ')',
         backgroundSize: 'cover',
         backgroundPosition: 'center center',
         backgroundRepeat: 'no-repeat'
      })

      return (
         <div className="content">
         {
            randomArr.map(tile => (
               <button 
                  key={tile.id}
                  className="tile"
                  style={divStyle(tile.src)}
               >
                  {tile.name}
               </button>              
            ))
         }    
         </div>     	
      );
   }
}

export default Tile;
