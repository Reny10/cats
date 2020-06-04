import { CHANGE_SEARCHFIELD,
         REQUEST_CATS_PENDING,
         REQUEST_CATS_SUCCESS,
         REQUEST_CATS_FAILED } from './constants';

import * as reducers from './reducers';

describe('searchCats', () => {
const initialStateSearch = {
  searchField: ''
}

  it('should return the initial state', () => {
    expect(reducers.searchCats(undefined, {})).toEqual({searchField:'' })
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect( reducers.searchCats(initialStateSearch, {
        type:CHANGE_SEARCHFIELD,
        payload: 'abc'})
    ).toEqual({ searchField: "abc" })
  })
})


describe('requestCats reducer', () => {
const initialStateCats = {
  cats: [],
  isPending: false
}
  {/*it('should return the initial state', () => {
    expect(reducers.requestCats(undefined, {})
    ).toEqual(initialStateCats)
     }) */}

 

  it('should handle REQUEST_CATS_PENDING action', () => {
    expect( reducers.requestCats(initialStateCats, {
        type: REQUEST_CATS_PENDING,
        payload: {isPending: true}
      })
    ).toEqual(
     {  cats: [],
        isPending: true
      })
  })


  it('should handle REQUEST_CATS_SUCCESS action', () => {
    expect( reducers.requestCats(initialStateCats, {
        type: REQUEST_CATS_SUCCESS,
        payload: [{
            id: '123',
            name: 'test',
            email: 'test@gmail.com'
          }]
      })
    ).toEqual(
      {   cats: [{
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }],
        isPending: false
      })
  })


  it('should handle REQUEST_CATS_FAILED action', () => {
    expect( reducers.requestCats(initialStateCats, {
        type:REQUEST_CATS_FAILED,
        payload: 'NOOO'
      })
    ).toEqual(
      { error: 'NOOO',
        cats: [],
        isPending: false
      })
  })
})
