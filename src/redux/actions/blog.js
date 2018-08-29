import { BLOG } from "./ActionTypes"
import axios from "../../axios"
import BASE_URL from "../../constants/BaseUrl"


export function addBlog(blog) {
  return (dispatch) => {
    dispatch(addingBlog())

    axios.post(`${BASE_URL.API}/api/v1/blog`, {
      name: blog.name, description: blog.description
    }).then(res => {
      if (res.status !== 200) {
        throw new Error("Server error (not 200).")
      }

      let data = res.data
      if (!data) {
        throw new Error("Server error (no data).")
      }

      dispatch(addingBlogSuccess())
    }).catch(err => {
      dispatch(addingBlogFailed())
      if (err.status) {
        alert("Server error (unknown response).")
      } else {
        console.warn(JSON.stringify(err))
        alert(err.message)
      }
    })
  }
}

export function removeBlog(blog) {
  return (dispatch) => {
    dispatch(removingBlog())

    axios.delete(`${BASE_URL.API}/api/v1/blog/${blog.id}`, {
    }).then(res => {
      if (res.status !== 200) {
        throw new Error("Server error (not 200).")
      }

      let data = res.data
      if (!data) {
        throw new Error("Server error (no data).")
      }

      dispatch(removingBlogSuccess())
    }).catch(err => {
      dispatch(removingBlogFailed())
      if (err.status) {
        alert("Server error (unknown response).")
      } else {
        console.warn(JSON.stringify(err))
        alert(err.message)
      }
    })
  }
}

export function fetchBlogs() {
  return (dispatch) => {
    dispatch(fetchingBlogs())

    axios.get(`${BASE_URL.API}/api/v1/blog`, {
    }).then(res => {
      if (res.status !== 200) {
        throw new Error("Server error (not 200).")
      }

      let data = res.data
      if (!data) {
        throw new Error("Server error (no data).")
      }

      dispatch(fetchingBlogsSuccess(data))
    }).catch(err => {
      dispatch(fetchingBlogsFailed())
      if (err.status) {
        alert("Server error (unknown response).")
      } else {
        console.warn(JSON.stringify(err))
        alert(err.message)
      }
    })
  }
}

export function fetchBlogPost(blog) {
  return (dispatch) => {
    dispatch(fetchingBlogPost())

    axios.get(`${BASE_URL.API}/api/v1/blog/${blog.id}/post`, {
    }).then(res => {
      if (res.status !== 200) {
        throw new Error("Server error (not 200).")
      }

      let data = res.data
      if (!data) {
        throw new Error("Server error (no data).")
      }

      dispatch(fetchingBlogPostSuccess(data))
    }).catch(err => {
      dispatch(fetchingBlogPostFailed())
      if (err.status) {
        alert("Server error (unknown response).")
      } else {
        console.warn(JSON.stringify(err))
        alert(err.message)
      }
    })
  }
}

function addingBlog() {
  return {
    type: BLOG.ADDING
  }
}

function addingBlogSuccess() {
  return {
    type: BLOG.ADDING_SUCCESS
  }
}

function addingBlogFailed() {
  return{
    type: BLOG.ADDING_FAILED
  }
}

function removingBlog() {
  return {
    type: BLOG.REMOVING
  }
}

function removingBlogSuccess() {
  return {
    type: BLOG.REMOVING_SUCCESS
  }
}

function removingBlogFailed() {
  return{
    type: BLOG.REMOVING_FAILED
  }
}

function fetchingBlogs() {
  return {
    type: BLOG.FETCHING_BLOGS
  }
}

function fetchingBlogsSuccess(blogs) {
  return {
    type: BLOG.FETCHING_BLOGS_SUCCESS,
    payload: blogs
  }
}

function fetchingBlogsFailed() {
  return{
    type: BLOG.FETCHING_BLOGS_FAILED
  }
}

function fetchingBlogPost() {
  return {
    type: BLOG.FETCHING_BLOG_POST
  }
}

function fetchingBlogPostSuccess(blogPost) {
  return {
    type: BLOG.FETCHING_BLOG_POST_SUCCESS,
    payload: blogPost
  }
}

function fetchingBlogPostFailed() {
  return{
    type: BLOG.FETCHING_BLOG_POST_FAILED
  }
}
