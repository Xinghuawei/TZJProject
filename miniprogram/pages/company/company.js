Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 2000,
    duration: 600
  },

  onLoad: function() {

    var that = this;
    var data = {
      "datas": [{
          "id": 1,
        "imgurl": "../../images/reward1.jpg"
        },
        {
          "id": 2,
          "imgurl": "../../images/reward2.png"
        },
        {
          "id": 3,
          "imgurl": "../../images/reward3.png"
        },
        {
          "id": 4,
          "imgurl": "../../images/reward4.png"
        },
        {
          "id": 5,
          "imgurl": "../../images/reward5.png"
        },
        {
          "id": 6,
          "imgurl": "../../images/reward6.png"
        },
        {
          "id": 7,
          "imgurl": "../../images/reward7.png"
        },
        {
          "id": 8,
          "imgurl": "../../images/reward8.png"
        },
        {
          "id": 9,
          "imgurl": "../../images/reward9.png"
        },
        {
          "id": 10,
          "imgurl": "../../images/reward10.png"
        },
        {
          "id": 11,
          "imgurl": "../../images/reward11.png"
        }
      ]
    };
    that.setData({
      lunboData: data.datas
    });

    this.getData();
  },

  getData: function() {
    const db = wx.cloud.database();
    db.collection('introduction').where({ _id: 'intro' }).get({
        success:res=>{
        console.log(res)
          this.setData({
            queryResult: res.data[0]
          });
          console.log(this.data.queryResult)
      }
    })
   
  }
})