

Page({
// redirectTo关闭当前页面，不能返回
//navigateTo则可以返回
//但是两者都不能去tabbar
  nextPage: function() {
    wx.redirectTo({
      url: '../main/main',
    }),
      wx.showLoading({
        title: '天之骄为您服务',
      })
  }
})
