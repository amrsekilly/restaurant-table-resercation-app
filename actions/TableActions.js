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
export const selectService = (serviceSelected) => {
  return {
    type: SELECT_SERVICE,
    payload: serviceSelected
  };
};