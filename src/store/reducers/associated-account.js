import { handleActions } from 'redux-actions'
import {
  SET_AVATAR_URL,
  SET_SCHOOL_NAME,
  SET_STUDENT_NAME,
  SET_STUDENT_ID
} from '../types/associated-account'

export default handleActions({
  [SET_AVATAR_URL] (state, action) {
    return {
      ...state,
      avatarUrl: action.payload
    }
  },
  [SET_SCHOOL_NAME] (state, action) {
    return {
      ...state,
      schoolName: action.payload
    }
  },
  [SET_STUDENT_NAME] (state, action) {
    return {
      ...state,
      studentName: action.payload
    }
  },
  [SET_STUDENT_ID] (state, action) {
    return {
      ...state,
      studentId: action.payload
    }
  }
}, {
  avatarUrl: '',
  schoolName: '',
  studentName: '',
  studentId: ''
})
