import {
  TAXONOMIES_REQUEST,
  TAXONOMIES_SUCCESS,
  TAXONOMIES_FAILURE
} from '../lib/constants'

export function loadTaxonomies() {
  return dispatch => {
    dispatch(loadTaxonomiesRequest)
    return fetch()
    .then((response) => response.json())
    .then((responseData)=> {
      dispatch(loadTaxonomiesSuccess(responseData))
    })
    .catch((error) => {
      dispatch(loadTaxonomiesFailure(error))
    })
  }
}

export function loadTaxonomiesRequest() {
  return {
    type: TAXONOMIES_REQUEST
  }
}

export function loadTaxonomiesSuccess(responseData) {
  return {
    type: TAXONOMIES_FAILURE,
    payload: responseData
  }
}

export function loadTaxonomiesFailure(error) {
  return {
    type: TAXONOMIES_FAILURE,
    payload: error
  }
}
