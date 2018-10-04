import { createSelector } from 'reselect'

export const itemsSelector = state => state.main.items

const filterItems = (items, searchTerm) =>
  items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

const searchTermSelector = state => state.main.searchTerm;

export const filterItemsSelector = createSelector(
  itemsSelector,
  searchTermSelector,
  filterItems
)