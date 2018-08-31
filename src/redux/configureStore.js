import { createStore, applyMiddleware } from "redux"
import { persistStore } from "redux-persist"
import { composeWithDevTools } from "remote-redux-devtools"
import rootReducer from "./reducers/RootReducer"
import thunkMiddleware from "redux-thunk"

export default function configureStore() {
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware
      )
    )
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./reducers/RootReducer").default
      store.replaceReducer(nextRootReducer)
    })
  }

  persistStore(store, null)

  return store
}
