import * as types from '../constants/actionTypes.js';

export const addQuestion = data => ({
  type: types.ADD_QUESTIONS,
  payload: data
});

export const getCategories = categories => ({
  type: types.GET_CATEGORIES,
  payload: categories
});
