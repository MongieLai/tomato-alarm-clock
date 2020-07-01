import {
  myHttp
} from '../../lib/http'
// const { http }  = require('../../lib/http.js')
const {
  app_id,
  app_secret
} = getApp().globalData

Page({
  data: {

  },
  //点击按钮 => 调用小程序原生的 wx.login => 参数 => http.post => 返回 user
  // => 保存user => 返回首页
  login(event) {
    const encrypted_data = event.detail.encryptedData
    const iv = event.detail.iv
    let code
    wx.login({
      success: (response) => {
        code = response.code
        myHttp.post('/sign_in/mini_program_user',{
          code,
          iv,
          encrypted_data,
          app_id,
          app_secret,
        })
        console.log(111)
      }
    })
  },
  wxLogin(encrypted_data, iv) {
    wx.login({
      success: (res) => this.loginMe(res.code, iv, encrypted_data)
    })
  },
 
})