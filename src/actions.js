import { CHANGE_SEARCHFIELD,
         REQUEST_CATS_PENDING,
         REQUEST_CATS_SUCCESS,
         REQUEST_CATS_FAILED } from './constants'

export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestCats = () => (dispatch) => {
  dispatch({ type: REQUEST_CATS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
   .then(data => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data }))
   .catch(error => dispatch({ type: REQUEST_CATS_FAILED, payload: error }))
}

