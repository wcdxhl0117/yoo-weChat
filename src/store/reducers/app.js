import { handleActions } from 'redux-actions'
import {
  GET_TEL,
  SET_TOKEN
} from '../types/app'

export default handleActions({
  [SET_TOKEN] (state, action) {
    return {
      ...state,
      isSetToken: true,
      token: action.payload
    }
  },
  // [SET_IS_SET_TOKEN] (state, action) {
  //   return {
  //     ...state,
  //     isSetToken: action.payload
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
  isSetToken: false
})
