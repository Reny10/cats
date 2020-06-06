import { CHANGE_SEARCHFIELD,
         REQUEST_CATS_PENDING,
         REQUEST_CATS_SUCCESS,
         REQUEST_CATS_FAILED } from './constants';

const initialStateSearch = {
  searchField: ''
}
export const searchCats = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }}

const initialStateCats = {
  cats: [],
  isPending: false,
  error: ''
}

export const requestCats = (state=initialStateCats, action={}) => {
  switch (action.type) {
    case REQUEST_CATS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_CATS_SUCCESS:
      return Object.assign({}, state, {cats: action.payload, isPending: false})
    case REQUEST_CATS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}