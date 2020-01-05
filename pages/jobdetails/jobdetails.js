// pages/jobdetails/jobdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobdtl:[
        {
        batch:"07848087",
        base:"界头庙镇小峪村果园基地",
        area:"800",
        varieties:"矮化苹果",
        type:"灌溉",
        time:"2019-12-27-12：35",
        person:"范思哲",
        img:""
      }
    ],
    workimg:[
      {
        imgid:1,
        img:"plant.png"
      },
      {
        imgid: 2,
        img: "plant.png"
      },
      {
        imgid: 3,
        img: "plant.png"
      },
      {
        imgid: 4,
        img: "plant.png"
      },
      {
        imgid: 5,
        img: "plant.png"
      }
    ],
    newimgid:5,
    tempFilePaths:"",
    del:true,
    max:true
  },
  showicon:function(){
    var _this = this;
    _this.setData({
      del: !_this.data.del,
      max: !_this.data.max
    })
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
        _this.setData({
          newimgid: newimgid++
        })
        var imgjson = {
          imgid: newimgid, 
          img: tempFilePaths
        } 
        _this.setData({
          workimg: workimg.push(imgjson)
        })
      }
    })
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

  },
  addshow: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {

  },


  close_mask: function () {
    this.setData({
      showModal: false
    })
  },
})