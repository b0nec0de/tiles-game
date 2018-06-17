import { INCREMENT_TRIES } from '../constants/action-types';
import { RESET_TRIES } from '../constants/action-types';

const initialState = {
   counter: 0
};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case INCREMENT_TRIES:
         return { ...state,
                  counter: state.counter + 1 
         };
      case RESET_TRIES:
         return { ...state,
                  counter: 0
         }
      default:
         return state;
   }
}

export default rootReducer;
