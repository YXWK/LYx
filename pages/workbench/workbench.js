// pages/workbench/workbench.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      swiper:[
        {
          typeName: "苹果",
          img:"../../static/4.010a94ce.jpg",
          serial:"6451214524",
          base:"某个县某个基地",
          worktype: ["施肥", "除草", "整理", "投石", "灌溉", "消毒", "采收"]
        },
        {
          typeName: "土鸡",
          img: "../../static/4.010a94ce.jpg",
          serial: "6451214524",
          base: "某个县某个基地",
          worktype: ["施肥", "除草", "整理", "投石", "灌溉", "消毒", "采收"]
        },
        {
          typeName: "连翘",
          img: "../../static/4.010a94ce.jpg",
          serial: "6451214524",
          base: "某个县某个基地",
          worktype: ["施肥", "除草", "整理", "投石", "灌溉", "消毒", "采收"]
        },
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      current: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */

  prevImg: function () {
    var swiper = this.data.swiper;
    console.log(swiper.length)
    var current = this.data.current;
    this.setData({
      current : current > 0 ? current - 1 : swiper.length - 1
    })
    // current = current > 0 ? current - 1 : swiper.length - 1;
    this.setData({
      swiper: swiper,
    })
  },

  nextImg: function () {
    // console.log(2);
    var swiper = this.data.swiper;
    var current =this.data.current;
    console.log(current);
    console.log(swiper.length)
    this.setData({
      current : current < (swiper.length - 1) ? current + 1 : 0
    })
    // current = current < (swiper.length - 1) ? current + 1 : 0;
    this.setData({
      swiper: swiper,
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