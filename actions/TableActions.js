import firebase from 'firebase';

import {
  SELECT_TABLE,
  SELECT_SERVICE
} from './types';

// to set the table number
export const setTable = (tableNum) => {
  return {
    type: SELECT_TABLE,
    payload: tableNum
  };
};

// When the user selects a service 
export const selectService = (serviceSelected = '', table = '') => {

  return (dispatch) => {
    if (serviceSelected && table) {
      firebase.database().ref(`/${table}`)
        .set({
          table,
          service: serviceSelected,
        })
        .then(() => {
          dispatch({
            type: SELECT_SERVICE,
            payload: serviceSelected
          });
        });
    } else {
      firebase.database().ref(`/${table}`)
        .set({
          "table": "null",
          "service": "null"
        })
        .then(() => {
          dispatch({
            type: SELECT_SERVICE,
            payload: serviceSelected
          });
        });
    }
    
  };
};