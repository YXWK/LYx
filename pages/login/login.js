// pages/login/login.js
var product = require("../../components/public/public.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgurl: '',
    disabled: false,
    no: '',
    pwd: '',
    noinput: false,
    pwdinput: false,

  },
  // 记住密码
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  // login:function(){
  //   var _this = this;
  // },
  // 用户名
  noinput: function(e) {
    this.setData({
      no: e.detail.value
    });
    this.setData({
      noinput: true
    });
    if (this.data.noinput == true && this.data.pwdinput == true) {
      this.setData({
        disabled: false
      });
    }

  },
  // 密码
  pwdinput: function(e) {
    this.setData({
      pwd: e.detail.value
    });
    this.setData({
      pwdinput: true
    });
    if (this.data.noinput == true && this.data.pwdinput == true) {
      this.setData({
        disabled: false
      });
    }
  },
  // login
  formSubmit: function(e) {
    // wx.showLoading({
    //   title: '登录中...',
    // })
    // console.log(e);
    console.log(this.data.no);
    console.log(this.data.pwd);
    this.setData({
      disabled: true
    });
    if (this.data.no != '' && this.data.pwd!=''){
      wx.switchTab({
        url: '../index/index',
      })
    }else{
      wx.showToast({
        title: '账号和密码不能为空',
        icon:'none',
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
  onLoad: function(options) {

    console.log(this.data.msgurl)
    this.setData({
      msgurl: product.data.msgurl
    })

    this.setData({
      disabled: false
    });
    // var student = wx.getStorageSync('student');
    // if (typeof (student) == 'object' && student.no != '' && student.classid != '') {
    //   wx.switchTab({
    //     url: '../teacher/teacher',
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (this.data.no == '' || this.data.pwd == '') {
      this.setData({
        disabled: true
      });
    } else {
      this.setData({
        disabled: false
      });
    }
  }
})