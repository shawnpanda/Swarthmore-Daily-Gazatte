import { combineReducers } from 'redux'
import { Record } from 'immutable'

import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE
} from '../lib/constants'

const initialState = Record({
  isFetching: false,
  loaded: false,
  fields: []
})

function categories(state = new initialState, action){
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return state.set('isFetching',  true)
    case CATEGORIES_SUCCESS:
      return state.set('isFetching',  false)
                  .set('loaded', true)
                  .set('fields', action.payload)
    case CATEGORIES_FAILURE:
      return state.set('isFetching',  false)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  categories
})

export default rootReducer
