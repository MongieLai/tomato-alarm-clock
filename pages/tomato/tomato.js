// pages/tomato/tomato.js
Page({
  timer: null,
  data: {
    defaultSeconds: 11,
    timerStatus: 'stop',
    time: "",
    finishConfirmVisible: false,
    abandonConfirmVisble: false,
    againButtonVisible: false
  },
  stopTimer() {
    clearInterval(this.timer)
    this.setData({
      timerStatus: "stop"
    })
    this.timer = null
  },
  againTimer() {
    this.data.defaultSeconds = 11
    this.setData({
      againButtonVisible: !this.data.againButtonVisible
    })
    this.startTimer()
  },
  clickAbandon() {
    this.stopTimer()
    this.setData({
      abandonConfirmVisble: true
    })
  },
  finishConfirm(event){
    let {detail} = event
  },
  finishCancel(){
    this.setData({
      finishConfirmVisible: !this.data.finishConfirmVisible
    })
  },
  abandonCancel() {
    this.setData({
      abandonConfirmVisble: false
    })
  },
  abandonConfirm(event) {
    let {
      detail
    } = event
    if (detail) {
      wx.navigateBack({
        to:-1
      })
    } else {
      wx.showToast({
        title: '内容不能为空',
        icon: "none",
      })
    }
  },
  startTimer() {
    this.setData({
      timerStatus: "start"
    })
    this.changeTime()
    this.timer = setInterval(() => {
      this.data.defaultSeconds--
      this.changeTime()
      if (this.data.defaultSeconds <= 0) {
        this.stopTimer()
        this.setData({
          againButtonVisible: true,
          finishConfirmVisible: true
        })
      }
    }, 1000)
  },
  changeTime() {
    let minute = Math.floor(this.data.defaultSeconds / 60)
    let second = Math.floor(this.data.defaultSeconds % 60)
    if ((minute + "").length === 1) {
      minute = '0' + minute
    }
    if ((second + "").length === 1) {
      second = '0' + second
    }
    this.setData({
      time: `${minute}:${second}`
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.startTimer()
    console.log('我显示了')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})