import { createAction } from 'redux-actions'
// import { getStore } from 'wepy-redux'
import wepy from 'wepy'
import {
  GET_TEL
} from '../types/app'

// const store = getStore()

export const getTel = createAction(GET_TEL, () => {
  return new Promise(resolve => {
    wepy.request({
      url: `${wepy.$instance.globalData.baseURL}/wx/micro/parent/user/userCenter`,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'S_T': store.getState().app.token
      },
      success (res) {
        console.log('action\\app.js --> getTel --> success')
        console.log(res)
        if (res.data.ret_code === 0) {
          resolve(res.data.ret.customerTel1)
        }
      },
      fail (res) {
        console.log('action\\app.js --> getTel --> fail')
        console.log(res)
      }
    })
  })
})
