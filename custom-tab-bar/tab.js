Component({
  data: {
    selected: 0,
    color: "#fff",
    // selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "../index/index",
        "text": "首页",
        "iconPath": "../static/home.png",
        "selectedIconPath": "../static/home-active.png"
      },
      {
        "pagePath": "../contral/contral",
        "text": "远程控制",
        "iconPath": "../static/contral.png",
        "selectedIconPath": "../static/contral-active.png"
      },
      {
        "pagePath": "../shopping/shopping",
        "text": "商城",
        "iconPath": "../static/shopping.png",
        "selectedIconPath": "../static/shopping-active.png"
      },
      {
        "pagePath": "../product/product",
        "text": "生产管理",
        "iconPath": "../static/product.png",
        "selectedIconPath": "../static/product-active.png"
      },
      {
        "pagePath": "../user/user",
        "text": "用户中心",
        "iconPath": "../static/user.png",
        "selectedIconPath": "../static/user-active.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})