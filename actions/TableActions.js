import firebase from 'firebase';

import {
  SELECT_TABLE,
  SELECT_SERVICE,
  LOADING
} from './types';

// to set the table number
export const setTable = (tableNum) => {
  return (dispatch) => {
    if (tableNum.indexOf(".") == -1 && Number.isInteger(Number(tableNum))) {
      dispatch({
        type: SELECT_TABLE,
        payload: tableNum
      });
    } else {
      // 
    }

  };

};

// When the user selects a service 
export const selectService = (serviceSelected = '', table = '') => {

  return (dispatch) => {
    if (serviceSelected && table) {
      dispatch({
        type: LOADING,
        payload: true
      });
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
          dispatch({
            type: LOADING,
            payload: false
          });
        });
    } else {
      firebase.database().ref(`/${table}`)
        .remove()
        .then(() => {
          dispatch({
            type: SELECT_SERVICE,
            payload: serviceSelected
          });
        });
    }
    
  };
};