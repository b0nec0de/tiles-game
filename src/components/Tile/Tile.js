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

   openTile(e) {
      let _this = e.target.style;
      _this.transform = "rotateY(180deg)";
      _this.transition = "1s";
      _this.backgroundImage = "url(+ ../../assets/img/telstar.jpg +)";
      
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

      const defaultStyle = {
         backgroundImage: 'url(./assets/img/cup.jpg)',
         backgroundSize: 'cover',
         backgroundPosition: 'center center',
         backgroundRepeat: 'no-repeat'
      }

      return (
         <div className="content">
         {
            randomArr.map(tile => (
               <button 
                  key={tile.id}
                  className="tile"
                  style={defaultStyle}
                  onClick={this.openTile}
               >
               </button>              
            ))
         }    
         </div>     	
      );
   }
}

export default Tile;
