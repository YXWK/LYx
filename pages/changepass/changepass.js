// pages/changepass/changepass.js
var product = require("../../components/public/public.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgurl: '',
    disabled: false,
    oldpass:"",
    newpass:"",
    newpass2:"",
    oldinput:false,
    newinput:false,
    newinput2:false
  },
  // 旧密码
  oldinput: function (e) {
    this.setData({ oldpass: e.detail.value });
    this.setData({ oldinput: true });
    if (this.data.oldinput == true && this.data.newinput == true && this.data.newinput2 == true) {
      this.setData({ disabled: false });
    }

  },
  // 新密码
  newinput: function (e) {
    this.setData({ newpass: e.detail.value });
    this.setData({ newinput: true });
    if (this.data.oldinput == true && this.data.newinput == true && this.data.newinput2 == true) {
      this.setData({ disabled: false });
    }
  },
  // 再次新密码
  newinput2: function (e) {
    this.setData({ newpass2: e.detail.value });
    this.setData({ newinput2: true });
    if (this.data.oldinput == true && this.data.newinput == true && this.data.newinput2 == true) {
      this.setData({ disabled: false });
    }
  },
  // changepass
  formSubmit: function (e) {
    // wx.showLoading({
    //   title: '登录中...',
    // })
    // console.log(e);
    console.log(this.data.oldpass);
    console.log(this.data.newpass);
    console.log(this.data.newpass2);
    this.setData({ disabled: true });
    if (this.data.oldinput != '' && this.data.newinput != '' && this.data.newinput2 != '') {
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 2000,
      })
      wx.switchTab({
        url: '../login/login',
      })
    } else {
      wx.showToast({
        title: '请填写完整',
        icon: 'none',
        duration: 2000
      })
    }
    // wx.request({
    //   url: app.globalData.url.login, //仅为示例，并非真实的接口地址
    //   data: {
    //     no: e.detail.value.no,
    //     pwd: e.detail.value.pwd
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res);
    //     if (res.statusCode == 200) {
    //       if (res.data.error == true) {
    //         wx.showToast({
    //           title: res.data.msg,
    //           icon: 'none',
    //           duration: 2000
    //         })
    //       } else {
    //         wx.setStorageSync('student', res.data.data);
    //         wx.showToast({
    //           title: res.data.msg,
    //           icon: 'success',
    //           duration: 2000
    //         })
    //         setTimeout(function () {
    //           wx.switchTab({
    //             url: '../teacher/teacher',
    //           })
    //         }, 2000)
    //       }
    //     } else {
    //       wx.showToast({
    //         title: '服务器出现错误',
    //         icon: 'none',
    //         duration: 2000
    //       })
    //     }
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.msgurl)
    this.setData({
      msgurl: product.data.msgurl
    })
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