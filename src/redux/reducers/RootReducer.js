import { persistCombineReducers } from "redux-persist"
import { blog } from "./blog"
import { post } from "./post"
import storage from 'redux-persist/lib/storage'

const config = {
  key: "primary",
  storage
}

const rootReducer = persistCombineReducers(config, {
  blog,
  post
})

export default rootReducer