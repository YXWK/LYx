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
    // 作业图
    workimg:[
      {
        imgid:1,
        img:"plant.png",
        del: true,
        max: true,
        issecected:true
      },
      {
        imgid: 2,
        img: "plant.png",
        del: true,
        max: true,
        issecected:true
      },
      {
        imgid: 3,
        img: "plant.png",
        del: true,
        max: true,
        issecected:true
      },
      {
        imgid: 4,
        img: "plant.png",
        del: true,
        max: true,
        issecected:true
      },
      {
        imgid: 5,
        img: "plant.png",
        del: true,
        max: true,
        issecected:true
      }
    ],
    newimgid:5,
    tempFilePaths:"",
    // del:true,
    // max:true,
    issecected:true,
    ismagnify:true,
    nowimg:0,
    addimg:true,
    currimgid:-1
  },
  // icon显示
  showicon:function(e){
    let $data = e.currentTarget.dataset;
    // console.log($data.bean);
    // console.log($data.bean.imgid);
    let _this = this;
    _this.setData({
      currimgid: $data.bean.imgid
    })
    // console.log(_this.data.currimgid);
    // console.log(_this.data.workimg);
    for (let i in _this.data.workimg){
      if (_this.data.currimgid == _this.data.workimg[i].imgid){
        // console.log(_this.data.workimg[i].del);
        // console.log(_this.data.workimg[i].max);
        _this.data.workimg[i].del = !_this.data.workimg[i].del;
        _this.data.workimg[i].max = !_this.data.workimg[i].max;
      }
    }
  },
  //图片放大
  magnify:function(e){
    let $data = e.currentTarget.dataset;
    let _this = this;
    _this.setData({
      ismagnify: !_this.data.ismagnify
    })
  },
  // 是否选中图片
  showselect:function(e){
    let _this = this;
    let $data = e.currentTarget.dataset;
    // console.log($data.bean);
    // console.log($data.bean.imgid);
    _this.setData({
      nowimg: $data.bean.imgid
    })
    // console.log(_this.data.nowimg);
    console.log(_this.data.workimg);
    for (let i in _this.data.workimg) {
      // console.log(_this.data.workimg[i]);
      if (_this.data.nowimg == _this.data.workimg[i].imgid) {
        // console.log(_this.data.nowimg);
        _this.data.workimg[i].issecected = !_this.data.workimg[i].issecected;
        console.log(_this.data.workimg[i].issecected);
      }
    }
    console.log(_this.data.workimg);
    
    // _this.setData({
    //   issecected: !_this.data.issecected
    // })
  },
  // 调用手机相册
  chooseimage: function () {
    let _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths,
          addimg:false
        })
        // ？？？
        // _this.setData({
        //   newimgid: newimgid++
        // })
        // var imgjson = {
        //   imgid: newimgid, 
        //   img: tempFilePaths
        // } 
        // _this.setData({
        //   workimg: workimg.push(imgjson)
        // })
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