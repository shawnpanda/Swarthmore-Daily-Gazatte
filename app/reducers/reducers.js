import { combineReducers } from 'redux'
import { Record } from 'immutable'

import {
  TAXONOMIES_REQUEST,
  TAXONOMIES_SUCCESS,
  TAXONOMIES_FAILURE
} from '../lib/constants'

const initialState = Record({
  isFetching: false,
  loaded: false,
  fields: new (Record({}))
})

function taxonomies(state = new initialState, action){
  switch (action.type) {
    case TAXONOMIES_REQUEST:
      return state.set('isFetching',  true)
    case TAXONOMIES_SUCCESS:
      return state.set('isFetching',  false)
                  .set('loaded', true)
    case TAXONOMIES_FAILURE:
      return state.set('isFetching',  false)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  taxonomies
})

export default rootReducer
