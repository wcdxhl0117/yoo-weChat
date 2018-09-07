import {
  handleActions
} from 'redux-actions'

import {
  SET_CHILD_NICK_NAME,
  SET_CHILD_NAME,
  SET_EXPIRATION_DATE,
  SET_IS_JOIN,
  SET_IS_BIND,
  SET_IS_AUTHORIZE
} from '../types/user'

export default handleActions({
  [SET_CHILD_NAME] (state, action) {
    return {
      ...state,
      childName: action.payload
    }
  },
  [SET_CHILD_NICK_NAME] (state, action) {
    return {
      ...state,
      childNickName: action.payload
    }
  },
  [SET_EXPIRATION_DATE] (state, action) {
    return {
      ...state,
      expirationDate: action.payload
    }
  },
  [SET_IS_JOIN] (state, action) {
    return {
      ...state,
      hasJoin: action.payload
    }
  },
  [SET_IS_BIND] (state, action) {
    return {
      ...state,
      hasBind: action.payload
    }
  },
  [SET_IS_AUTHORIZE] (state, action) {
    return {
      ...state,
      hasAuthorize: action.payload
    }
  }
}, {
  childName: '同学姓名',
  childNickName: '同学昵称',
  expirationDate: '',
  hasJoin: false,
  hasBind: false,
  hasAuthorize: false
})
