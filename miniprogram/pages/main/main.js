
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 5000,
    duration: 700
  },
  onLoad: function () {
    


    var that = this;
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/mainimage.png?sign=8ebd2a14eb7cd4056a653cf6aee1ff3a&t=1559847044"
        },
        {
          "id": 2,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/mainimage2.png?sign=eb2bed11d5dc3d6d3dc204d3c4ccc3e1&t=1559847082"
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