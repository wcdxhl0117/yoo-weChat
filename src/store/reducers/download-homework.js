import { handleActions } from 'redux-actions'
import {
  SET_HOMEWORK_EXIST,
  SET_HOMEWORK_TITLE,
  SET_HOMEWORK_ID,
  SET_HOMEWORK_URL
} from '../types/download-homework'

export default handleActions({
  [SET_HOMEWORK_EXIST] (state, action) {
    return {
      ...state,
      exist: !!action.payload
    }
  },
  [SET_HOMEWORK_TITLE] (state, action) {
    return {
      ...state,
      title: action.payload || '作业'
    }
  },
  [SET_HOMEWORK_ID] (state, action) {
    return {
      ...state,
      id: action.payload
    }
  },
  [SET_HOMEWORK_URL] (state, action) {
    return {
      ...state,
      url: action.payload
    }
  }
}, {
  exist: false,
  title: '作业',
  id: '',
  url: ''
})
