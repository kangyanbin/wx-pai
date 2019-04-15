Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'good', value: '头条' },
      { name: 'child', value: '搞笑', checked: 'true' },
      { name: 'mom', value: '配音秀' },
      { name: 'girl', value: '音乐' },
      { name: 'food', value: '小花作品' },
      { name: 'beauti', value: '活动' },
      { name: 'home', value: '其他' }
    ],
    radioChange: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    uploadVideo: function () {
      var me = this;
      wx.chooseVideo({
        sourceType: ['album'],
        success(res) {
          console.log(res);

          var duration = res.duration;
          var tmpheight = res.height;
          var tmpwidth = res.width;
          var tmpVideoUrl = res.tempFilePath;
          var tmpCoverUrl = res.thumbTempFilePath;

          if (duration > 11) {
            wx.showToast({
              title: '视频长度不能超过10秒...',
              icon: "none",
              duration: 2500
            })
          } else if (duration < 1) {
            wx.showToast({
              title: '视频长度不能小于1秒...',
              icon: "none",
              duration: 2500
            })
          } else {
            //TODO 打开选择bgm的页面
          }
        }
      })
    }
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
    
  }
})