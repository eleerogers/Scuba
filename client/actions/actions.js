import * as types from '../constants/actionTypes.js';

export const addQuestion = data => ({
  type: types.ADD_QUESTIONS,
  payload: data
});

export const addSubcategories = data => ({
  type: types.ADD_SUBCATEGORIES,
  payload: data
});
