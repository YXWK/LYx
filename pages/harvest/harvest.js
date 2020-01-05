// pages/harvest/harvest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    harvest: [
      {
        name: "马场村连翘",
        img: "plant.png",
        batch: "27997377",
        base:"圪台乡马场村连翘基地",
        num: "500",
        head: "李晓玲",
        data: "2019-12-25",
        ivtbatch: "500"
      },
    ],
    selectbatch: false,
    selectperson:false,
    date: '选择出库日期',
    tihuoWay: '选择出场批次',
    person:"选择出库人员",
    number: 1
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
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  batchShow() {
    this.setData({
      selectbatch: !this.data.selectbatch
    })
  },
  banchSelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      selectbatch: false
    })
  },
  personShow() {
    this.setData({
      selectperson: !this.data.selectperson
    })
  },
  personSelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      person: name,
      selectperson: false
    })
  },
  add:function(e){
    var num = this.data.number;
    num++;
    this.setData({
      number:num
    })
  },
  minus: function (e) {
    var num = this.data.number;
    num--;
    if(num<1){
      return;
    }
    this.setData({
      number: num
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
  
})