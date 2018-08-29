import { BLOG } from '../actions/ActionTypes'

const initialState = {
  loading: false,
  blogs: [],
  blog_post: [],
  blog_id: null,
  payload: {}
}

export function blog(state = initialState, action) {
  const payload = action.payload
  switch (action.type) {
    case BLOG.ADDING:
      return {
        ...state,
        loading: true
      }
    case BLOG.ADDING_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case BLOG.ADDING_FAILED:
      return {
        ...state,
        loading: false
      }
    case BLOG.REMOVING:
      return {
        ...state,
        loading: true
      }
    case BLOG.REMOVING_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case BLOG.REMOVING_FAILED:
      return {
        ...state,
        loading: false
      }
    case BLOG.FETCHING_BLOGS:
      return {
        ...state,
        loading: true
      }
    case BLOG.FETCHING_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: payload
      }
    case BLOG.FETCHING_BLOGS_FAILED:
      return {
        ...state,
        loading: false
      }
      case BLOG.FETCHING_BLOG_POST:
      return {
        ...state,
        loading: true
      }
    case BLOG.FETCHING_BLOG_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        blog_post: payload
      }
    case BLOG.FETCHING_BLOG_POST_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
