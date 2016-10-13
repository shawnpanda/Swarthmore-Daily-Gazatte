import {
  REQUEST_URL,

  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE
} from '../lib/constants'

export function loadCategories() {
  return dispatch => {
    dispatch(loadCategoriesRequest())
    return fetch(REQUEST_URL + 'categories')
    .then((response) => response.json())
    .then((responseData)=> {
      console.log(responseData)
      var categories = responseData.map(category => category.name)
      dispatch(loadCategoriesSuccess(categories))
    })
    .catch((error) => {
      dispatch(loadCategoriesFailure(error))
    })
  }
}

export function loadCategoriesRequest() {
  return {
    type: CATEGORIES_REQUEST
  }
}

export function loadCategoriesSuccess(responseData) {
  return {
    type: CATEGORIES_SUCCESS,
    payload: responseData
  }
}

export function loadCategoriesFailure(error) {
  return {
    type: CATEGORIES_FAILURE,
    payload: error
  }
}
