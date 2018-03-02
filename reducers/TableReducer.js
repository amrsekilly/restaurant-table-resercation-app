import {
  SELECT_TABLE,
} from '../actions/types';

let INITIAL_STATE = {
  // table number is stored in table
  tableNumber: '33'
};

// the table reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_TABLE:
      return { 
        ...state, 
        tableNumber: action.payload 
      };

    default:
      return state;
  }
};