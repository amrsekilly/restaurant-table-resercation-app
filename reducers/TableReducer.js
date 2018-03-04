import {
  SELECT_TABLE,
  SELECT_SERVICE,
  LOADING
} from '../actions/types';

let INITIAL_STATE = {
  // table number is stored in table
  tableNumber: '',
  // the service the user requested
  service: '',
  loading: false
};

// the table reducer
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case SELECT_TABLE:
      return { 
        ...state, 
        tableNumber: action.payload 
      };

    case SELECT_SERVICE:
      return {
        ...state,
        service: action.payload
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};