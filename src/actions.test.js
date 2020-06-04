import * as actions from './actions'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import { CHANGE_SEARCHFIELD,
         REQUEST_CATS_PENDING,
         REQUEST_CATS_SUCCESS,
         REQUEST_CATS_FAILED } from './constants';


export const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
  it('should create an action to search', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type:CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe("Fetch cats action PENDING", () => {
  it("should create a Pending action on request Cats", () => {
    const store = mockStore();
    store.dispatch(actions.requestCats())
    const action = store.getActions();
    expect(action[0]).toEqual({type: "REQUEST_CATS_PENDING"});
  });
});