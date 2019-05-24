
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function () {

    


    var that = this;
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/placeholder1.jpg?sign=f91aa0b6226af72c78c3df7887403bdb&t=1558631383"
        },
        {
          "id": 2,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/placeholder1.jpg?sign=f91aa0b6226af72c78c3df7887403bdb&t=1558631383"
        }
        // {
        //   "id": 3,
        //   "imgurl": "../../images/a3.jpg"
        // },
        // {
        //   "id": 4,
        //   "imgurl": "../../images/a4.jpg"
        // }
      ]
    };
    that.setData({
      lunboData: data.datas
    })
  },
  companyPage: function () {
    wx.navigateTo({
      url: '../company/company',
    })

  },
  lawyerPage: function () {
    wx.navigateTo({
      url: '../lawyer/lawyer',
    })
  },
  messagePage: function () {
    wx.navigateTo({
      url: '../message/message',
    })
  },
  mapPage: function () {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  onReady: function () {
    setTimeout(function () {
      wx.hideLoading()
    })
  }
})