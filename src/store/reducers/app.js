import { handleActions } from 'redux-actions'
import {
  GET_TEL,
  SET_TOKEN
} from '../types/app'

export default handleActions({
  [SET_TOKEN] (state, action) {
    return {
      ...state,
      hasCheckToken: true,
      token: action.payload
    }
  },
  // [SET_IS_SET_TOKEN] (state, action) {
  //   return {
  //     ...state,
  //     hasCheckToken: action.payload
  //   }
  // },
  [GET_TEL] (state, action) {
    return {
      ...state,
      tel: action.payload
    }
  }
}, {
  tel: '',
  token: '',
  hasCheckToken: false
})
