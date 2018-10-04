import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_END,
  GET_ITEMS_FOR_CATEGORY_BEGIN,
  GET_ITEMS_FOR_CATEGORY_END,
  SEARCH_TERM_CHANGED
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  items: [],
  loading: false,
  searchTerm: '',
  filteredItems: []
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_START:
      return {
        ...state,
        loading: true
      };
    case GET_CATEGORIES_END:
      return {
        ...state,
        loading: false,
        categories: action.payload.json
      };
    case GET_ITEMS_FOR_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true
      };
    case GET_ITEMS_FOR_CATEGORY_END:
      return {
        ...state,
        loading: false,
        items: action.payload.json.results,
        filteredItems: []
      };
    case SEARCH_TERM_CHANGED:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        filteredItems: action.payload.filteredItems
      };
    default:
      return state;
  }
};

export default mainReducer;