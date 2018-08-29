import { POST } from '../actions/ActionTypes'

const initialState = {
  loading: false,
  payload: {}
}

export function post(state = initialState, action) {
  const payload = action.payload
  switch (action.type) {
    case POST.ADDING:
      return {
        ...state,
        loading: true
      }
    case POST.ADDING_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case POST.ADDING_FAILED:
      return {
        ...state,
        loading: false
      }
    case POST.EDITING:
      return {
        ...state,
        loading: true
      }
    case POST.EDITING_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case POST.EDITING_FAILED:
      return {
        ...state,
        loading: false
      }
    case POST.REMOVING:
      return {
        ...state,
        loading: true
      }
    case POST.REMOVING_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case POST.REMOVING_FAILED:
      return {
        ...state,
        loading: false
      }
    case POST.FETCHING_POST:
      return {
        ...state,
        loading: true
      }
    case POST.FETCHING_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: payload
      }
    case POST.FETCHING_POST_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
