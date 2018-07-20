import { handleActions } from 'redux-actions'
import { SET_CHILD_NICK_NAME, SET_CHILD_NAME, SET_EXPIRATION_DATE, SET_JOIN_STATUS, SET_BIND_STATUS } from '../types/user'

export default handleActions({
  [SET_CHILD_NICK_NAME] (state, action) {
    return {
      ...state,
      childNickName: action.payload
    }
  },
  [SET_CHILD_NAME] (state, action) {
    return {
      ...state,
      childName: action.payload
    }
  },
  [SET_EXPIRATION_DATE] (state, action) {
    return {
      ...state,
      expirationDate: action.payload
    }
  },
  [SET_JOIN_STATUS] (state, action) {
    return {
      ...state,
      joinStatus: action.payload
    }
  },
  [SET_BIND_STATUS] (state, action) {
    return {
      ...state,
      bindStatus: action.payload
    }
  }
}, {
  childName: '同学姓名',
  childNickName: '同学昵称',
  expirationDate: '',
  joinStatus: false,
  bindStatus: false
})
