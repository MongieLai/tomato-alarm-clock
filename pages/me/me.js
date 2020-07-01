// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:"tomato",
    dataList:{
      "本周四":[
        {
          time:'14:00',
          text:'今晚打飞机',
          id:1
        },
        {
          time:'14:00',
          text:'今晚打飞机',
          id:2
        },
        {
          time:'14:00',
          text:'今晚打飞机',
          id:3
        },
        {
          time:'14:00',
          text:'今晚打飞机',
          id:4
        },
        {
          time:'14:00',
          text:'今晚打飞机',
          id:5
        }
      ],
      "下周六":[
        {
          time:'16:00',
          text:'buda',
          id:1
        }
      ]
    }
  },
  changeTab(event){
    let tab = event.currentTarget.dataset.name
    this.setData({tab})
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