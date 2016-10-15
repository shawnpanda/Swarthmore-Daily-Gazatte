import { combineReducers } from 'redux'
import { Record } from 'immutable'

import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,

  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE
} from '../lib/constants'

const initialState = Record({
  isFetching: false,
  loaded: false,
  fields: [],
  posts: []
})

function categories(state = new initialState, action){
  switch (action.type) {
    case CATEGORIES_REQUEST:
    case POSTS_REQUEST:
      return state.set('isFetching',  true)
    case CATEGORIES_SUCCESS:
      return state.set('isFetching',  false)
                  .set('loaded', true)
                  .set('fields', action.payload)
    case POSTS_SUCCESS:
      return state.set('isFetching',  false)
                  .set('loaded', true)
                  .set('posts', action.payload)
    case CATEGORIES_FAILURE:
    case POSTS_FAILURE:
      return state.set('isFetching',  false)

    default:
      return state
  }
}

const rootReducer = combineReducers({
  categories
})

export default rootReducer
