import firebase from 'firebase';

import {
  SELECT_TABLE,
  SELECT_SERVICE,
  LOADING,
  CLEAR_TABLE
} from './types';

const fromDb = (dispatch, tableNum) => {
  firebase.database().ref(`/${tableNum}`).child('service').on('value', data => {
    if (data.val()) {
      dispatch({
        type: SELECT_SERVICE,
        payload: data.val()
      });
    }
  });
};

// To clear the table 
export const clearTable = (tableNum = '999') => {
  return (dispatch) => {
    // remove from firebase
    firebase.database().ref(`/${tableNum}`)
      .remove()
      .then(() => {
        dispatch({
          type: SELECT_SERVICE,
          payload: ''
        });
      });
      // remove the reference to firebase 
      firebase.database().ref(`/${tableNum}`).child('service').off();
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
        // subscribe to the service value
        fromDb(dispatch, table);
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

      // remove the reference 
      firebase.database().ref(`/${table}`).off();
      
      dispatch({
        type: LOADING,
        payload: false
      });
    }
    
  };
};