import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import app from './app'
import associatedAccount from './associated-account'

export default combineReducers({
  counter,
  user,
  app,
  associatedAccount
})
