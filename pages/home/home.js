// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visibleConfirm: false,
    list: [
      { id: 1, text: '今天吃了黄焖鸡米饭今天吃了黄焖鸡米饭今天吃了黄焖鸡米饭今天吃了黄焖鸡米饭今天吃了黄焖鸡米饭今天吃了黄焖鸡米饭', finished: true },
      { id: 2, text: '做一百个俯卧撑', finished: true },
      { id: 3, text: '跑步两公里', finished: false },
      { id: 4, text: '游泳一千米', finished: false }
    ]
  },
  confirm(event) {
    console.log(event.detail)
  },
  confirmCreate(event) {
    let { detail } = event
    if (detail) {
      this.setData({
        visibleConfirm: false,
        list: [...this.data.list, { id: this.data.list.length + 1, text: detail, finished: false }]
      })
      wx.showToast({
        title: '添加成功',
        icon:"none",
      })
    } else {
      wx.showToast({
        title: '内容不能为空',
        icon:"none",
      })
    }

  },
  destroyTodo(event){
    let itemIndex = event.currentTarget.dataset.index
    let data = this.data
    data.list[itemIndex].finished = true
    this.setData({
      list:data.list
    })
  },
  hiddenConfirm() {
    this.setData({
      visibleConfirm: false
    })
    console.log(this.data.visible)
  },
  showConfirm() {
    this.setData({ visibleConfirm: true })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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