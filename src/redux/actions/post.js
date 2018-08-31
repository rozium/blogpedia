import { POST } from "./ActionTypes"
import axios from "../../axios"
import BASE_URL from "../../constants/BaseUrl"


export function addPost(post) {
  return (dispatch) => {
    dispatch(addingPost())

    axios.post(`${BASE_URL.API}/api/v1/post`, {
      title: post.title,
      body: post.body,
      author: post.author,
      date: post.date,
      blogID: post.blogID
    }).then(res => {
      if (res.status !== 200) {
        throw new Error("Server error (not 200).")
      }

      let data = res.data
      if (!data) {
        throw new Error("Server error (no data).")
      }

      dispatch(addingPostSuccess())
    }).catch(err => {
      dispatch(addingPostFailed())
      if (err.status) {
        alert("Server error (unknown response).")
      } else {
        console.warn(JSON.stringify(err))
        alert(err.message)
      }
    })
  }
}

export function editPost(post) {
  return (dispatch) => {
    dispatch(editingPost())

    axios.put(`${BASE_URL.API}/api/v1/post/${post.id}`, {
      title: post.title,
      body: post.body,
      author: post.author,
      date: post.date,
      blogID: post.blogID
    }).then(res => {
      if (res.status !== 200) {
        throw new Error("Server error (not 200).")
      }

      let data = res.data
      if (!data) {
        throw new Error("Server error (no data).")
      }

      dispatch(editingPostSuccess())
    }).catch(err => {
      dispatch(editingPostFailed())
      if (err.status) {
        alert("Server error (unknown response).")
      } else {
        console.warn(JSON.stringify(err))
        alert(err.message)
      }
    })
  }
}

export function removePost(post) {
  return (dispatch) => {
    dispatch(removingPost())

    axios.delete(`${BASE_URL.API}/api/v1/post/${post.id}`, {
    }).then(res => {
      if (res.status !== 200) {
        throw new Error("Server error (not 200).")
      }

      let data = res.data
      if (!data) {
        throw new Error("Server error (no data).")
      }

      dispatch(removingPostSuccess())
    }).catch(err => {
      dispatch(removingPostFailed())
      if (err.status) {
        alert("Server error (unknown response).")
      } else {
        console.warn(JSON.stringify(err))
        alert(err.message)
      }
    })
  }
}

export function fetchPost(postID) {
  return (dispatch) => {
    dispatch(fetchingPost())

    axios.get(`${BASE_URL.API}/api/v1/post/${postID}`, {
    }).then(res => {
      if (res.status !== 200) {
        throw new Error("Server error (not 200).")
      }

      let data = res.data
      if (!data) {
        throw new Error("Server error (no data).")
      }

      dispatch(fetchingPostSuccess(data))
    }).catch(err => {
      dispatch(fetchingPostFailed())
      if (err.status) {
        alert("Server error (unknown response).")
      } else {
        console.warn(JSON.stringify(err))
        alert(err.message)
      }
    })
  }
}

function addingPost() {
  return {
    type: POST.ADDING
  }
}

function addingPostSuccess() {
  return {
    type: POST.ADDING_SUCCESS
  }
}

function addingPostFailed() {
  return{
    type: POST.ADDING_FAILED
  }
}

function addingPost() {
  return {
    type: POST.ADDING
  }
}

function addingPostSuccess() {
  return {
    type: POST.ADDING_SUCCESS
  }
}

function addingPostFailed() {
  return{
    type: POST.ADDING_FAILED
  }
}

function editingPost() {
  return {
    type: POST.EDITING
  }
}

function editingPostSuccess() {
  return {
    type: POST.EDITING_SUCCESS
  }
}

function editingPostFailed() {
  return{
    type: POST.EDITING_FAILED
  }
}

function removingPost() {
  return {
    type: POST.REMOVING
  }
}

function removingPostSuccess() {
  return {
    type: POST.REMOVING_SUCCESS
  }
}

function removingPostFailed() {
  return{
    type: POST.REMOVING_FAILED
  }
}

function fetchingPost() {
  return {
    type: POST.FETCHING_POST
  }
}

function fetchingPostSuccess(post) {
  return {
    type: POST.FETCHING_POST_SUCCESS,
    payload: post
  }
}

function fetchingPostFailed() {
  return{
    type: POST.FETCHING_POST_FAILED
  }
}