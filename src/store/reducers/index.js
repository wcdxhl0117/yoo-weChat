import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import app from './app'
import associatedAccount from './associated-account'
import downloadHomework from './download-homework'

export default combineReducers({
  counter,
  user,
  app,
  associatedAccount,
  downloadHomework
})
