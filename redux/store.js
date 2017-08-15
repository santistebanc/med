import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import filters from './filters'
import users from './users'
import videos from './videos'
import s3videos from './s3videos'
import roles from './roles'

const reducer = combineReducers({
  filters,
  videos,
  s3videos,
  users,
  roles,
})


export const makeStore = (initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}