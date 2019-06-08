
Page({
  data: {
    hi:"hi"
  },
  onLoad: function () {
    var that = this
    const db = wx.cloud.database();
    db.collection('lawyers').get({
      success: res => {
        that.setData({
          lawyers: res.data
        });
      },
    })
    console.log(this.data)
  },
  lawyerInfo: function(event){
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../lawyerInfo/lawyerInfo?id='+id
    })
  },
})
  