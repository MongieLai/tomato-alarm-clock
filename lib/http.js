const {
  host,
  t_app_id,
  t_app_secret
} = getApp().globalData

const _http = (method, url, data) => {
  let header = {
    "t-app-id": t_app_id,
    "t-app-secret": t_app_secret,
    "Authorization": `Bearer ${wx.getStorageSync('X-token')}`
  }
  // if (wx.getStorageSync('X-token')) {
  //   header["Authorization"] = `Bearer ${wx.getStorageSync('X-token')}`
  // }
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: `${host}${url}`,
      header,
      dataType: 'json',
      success: (response) => {
        let statusCode = response.statusCode
        if (statusCode >= 400) {
          // if (statusCode === 401){
          //   wx.redirectTo({ url: "/pages/login/login" })
          // }
          reject({
            statusCode,
            response
          })
        } else {
          resolve(response)
        }
      },
      fail: (errors) => {
        wx.showToast({
          title: '请求失败',
          icon: 'none'
        })
        reject(errors)
      }
    })
  })
}

const http = {
  get: (url, parmas) => {
    return _http('GET', url, parmas)
  },
  post: (url, data) => {
    return _http('POST', url, data)
  },
  put: (url, data) => {
    return _http('GUT', url, data)
  },
  delete: (url, data) => {
    return _http('DELETE', url, data)
  }
}

export {
  http
}