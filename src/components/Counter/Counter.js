import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
   constructor() {
      super();

      this.state = {
         counter: 0
      };
   };
   
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
