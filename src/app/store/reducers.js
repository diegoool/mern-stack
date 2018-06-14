import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
import tasksReducer from './tasksReducer'


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    tasks: tasksReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
