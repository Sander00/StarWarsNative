import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_END,
  GET_ITEMS_FOR_CATEGORY_BEGIN,
  GET_ITEMS_FOR_CATEGORY_END,
  SEARCH_TERM_CHANGED
} from './actionTypes';

import { createSelector } from 'reselect';

const BASE_URL = "https://swapi.co/api/";

const filterItems = (items, searchTerm) => {
  return items.filter(function (result) {
    return result.name.substr(0, searchTerm.length) === searchTerm
  });
};

export const searchTermChanged = (searchTerm, items) => {
  return {
    type: SEARCH_TERM_CHANGED,
    payload: {
      searchTerm: searchTerm,
      filteredItems: filterItems(items, searchTerm),
    }
  }
};

const getCategoriesBegin = () => {
  return {
    type: GET_CATEGORIES_START
  }
};

const getCategoriesEnd = payload => {
  return {
    type: GET_CATEGORIES_END,
    payload: payload
  }
};

const getItemsForCategoryBegin = () => {
  return {
    type: GET_ITEMS_FOR_CATEGORY_BEGIN
  }
};

const getItemsForCategoryEnd = payload => {
  return {
    type: GET_ITEMS_FOR_CATEGORY_END,
    payload: payload
  }
};

export const getCategories = () => {
  return dispatch => {
    dispatch(getCategoriesBegin());
    return fetch(BASE_URL)
      .then(response => response.json())
      .then(json => dispatch(getCategoriesEnd({ json })))
  }
};

export const getItemsForCategory = categoryName => {
  return dispatch => {
    dispatch(getItemsForCategoryBegin());
    return fetch(BASE_URL + categoryName)
      .then(response => response.json())
      .then(json => dispatch(getItemsForCategoryEnd({ json })))
  }
};