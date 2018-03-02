import {
  SELECT_TABLE,
} from './types';

// to set the table number
export const setTable => (tableNum) {
  return {
    type: SELECT_TABLE,
    payload: tableNum
  };
}