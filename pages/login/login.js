// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    userpass: "",

  },
  bindname: function (e) {
    var _this = this;
    var dataset = e.currentTarget.dataset;
    var value = e.detail.value;
    var name = dataset.name; 
    _this.data[name] = value;
    this.setData({
      username: _this.data[name]
    })
    console.log(_this.data[name])
  },
  bindpass: function (e) {
    var _this = this;
    var dataset = e.currentTarget.dataset;
    var value = e.detail.value;
    var pass = dataset.pass;
    _this.data[pass] = value;
    _this.setData({
      pass: _this.data[pass]
    })
    console.log(pass)
    console.log(_this.data[pass])
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  login:function(){
    var _this = this;
    // this.setData({
    //   username:this.username,
    //   userpass: this.userpass
    // })
    console.log(_this.username);
    console.log(_this.userpass);
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