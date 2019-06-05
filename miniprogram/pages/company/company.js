
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
        "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward1.jpg?sign=4270f15d9822c50b89b61695f1961e65&t=1559775121"
        },
        {
          "id": 2,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward2.png?sign=fce1ba79a6cf9179597218135af34e0f&t=1559775134"
        },
        {
          "id": 3,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward3.png?sign=9632d0285fe525172f159bcc7f784f69&t=1559775144"
        },
        {
          "id": 4,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward4.png?sign=d51a9c6665c53b80ddbf159ed261fb26&t=1559775157"
        },
        {
          "id": 5,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward5.png?sign=48ef6e7d4ce1e60093e0c913d64da959&t=1559775169"
        },
        {
          "id": 6,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward6.png?sign=8f17a9fbb460232133ee5236afcbb448&t=1559775179"
        },
        {
          "id": 7,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward7.png?sign=a846e3c4d3225ad8dd6aa1aa4031b7cb&t=1559775195"
        },
        {
          "id": 8,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward8.png?sign=01b74cabf970104b3f8a1a4d16200232&t=1559775210"
        },
        {
          "id": 9,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward9.png?sign=7b1b9647750afd8b7c7609ff1a4686cc&t=1559775219"
        },
        {
          "id": 10,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/ward10.png?sign=622e2acfc7bde042027b34024831cc77&t=1559775228"
        },
        {
          "id": 11,
          "imgurl": "https://747a-tzj-wechat-project-44v3a-1259195337.tcb.qcloud.la/reward11.png?sign=0b06ab0ce8fa0f8d489a1c0609045b46&t=1559775237"
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