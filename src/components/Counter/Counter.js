import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
   constructor() {
      super();

      this.state = {
         counter: 0
      };

      this.resetAllTiles = this.resetAllTiles.bind(this);
   };

   resetAllTiles() {
      let opened = document.getElementsByClassName('open');
      let sliced = [].slice.call(opened);
      sliced.forEach(function(item) {
            item.style.transform = 'rotateY(0deg)';
            item.style.backgroundImage = 'url(./assets/img/cup.jpg)';
      })	
}
   
   render() {
      return (
         <div className="Counter">
            <div className="сounter-area">
                  Количество попыток: {this.state.counter}
            </div>
            <button 
               className="button reset" 
               type="button"
               onClick={() => this.resetAllTiles()}
            >
               Reset
            </button>
         </div>
      );
   }
}

export default Counter;
