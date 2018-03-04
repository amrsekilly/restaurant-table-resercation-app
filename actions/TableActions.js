import firebase from 'firebase';

import {
  SELECT_TABLE,
  SELECT_SERVICE,
  LOADING,
  CLEAR_TABLE
} from './types';

// To clear the table 
export const clearTable = (tableNum = '999') => {
  return (dispatch) => {
    firebase.database().ref(`/${tableNum}`)
      .remove()
      .then(() => {
        dispatch({
          type: SELECT_SERVICE,
          payload: ''
        });
      });
  };
}

// to set the table number
export const setTable = (tableNum) => {
  return (dispatch) => {
    if (tableNum.indexOf(".") == -1 && Number.isInteger(Number(tableNum)) && Number(tableNum) <= 200) {
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
      dispatch({
        type: LOADING,
        payload: true
      });
      firebase.database().ref(`/${table}`)
        .remove()
        .then(() => {
          dispatch({
            type: SELECT_SERVICE,
            payload: serviceSelected
          });
        });
      dispatch({
        type: LOADING,
        payload: false
      });
    }
    
  };
};