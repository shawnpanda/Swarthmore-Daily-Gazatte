import {
  REQUEST_URL,

  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,

  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE
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

export function loadPosts() {
  return dispatch => {
    dispatch(loadPostsRequest())
    return fetch(REQUEST_URL + 'posts')
    .then((response) => response.json())
    .then((responseData)=> {
      console.log(responseData)
      var posts = responseData.map(post => post.content.rendered)
      dispatch(loadPostsSuccess(posts))
    })
    .catch((error) => {
      dispatch(loadPostsFailure(error))
    })
  }
}

export function loadPostsRequest() {
  return {
    type: POSTS_REQUEST
  }
}

export function loadPostsSuccess(responseData) {
  return {
    type: POSTS_SUCCESS,
    payload: responseData
  }
}

export function loadPostsFailure(error) {
  return {
    type: POSTS_FAILURE,
    payload: error
  }
}
