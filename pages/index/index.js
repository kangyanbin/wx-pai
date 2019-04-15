var app = getApp()
var common = require('../../utils/data.js')
console.log(common.list);
//获取应用实例
Page({
  data: {
    new: 'top-hoverd-btn',
    good: '',
    child: '',
    mom: '',
    girl: '',
    shoe: '',
    home: '',
    beauti: '',
    food: '',
    hidden: false,
    list: common.list,
    now:"new"
  },
  //查找数组中对象属性值classIfication等于val
  add:function(arr,val){
    var array = [];
    for(var i = 0;i<arr.length;i++){
      if (arr[i].classIfication == val){
         array.push(arr[i]);
      }
    }
    this.setData({
      list : array
    })
    console.log(array);
  },
  top:function(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  onLoad: function (options) {
    // this.add(common.list,"good");
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  toNew: function () {
    console.log('new');
    this.updateBtnStatus('new');
    this.setData({
      now: "new",
      list: common.list
    })
    wx.startPullDownRefresh()
    this.top()
  },
  toGood: function () {
    console.log('good');
    this.updateBtnStatus('good');
    //设置当前页面为good
    this.setData({
      now:"good"
    })
    this.add(common.list, "good");
    wx.startPullDownRefresh()
    this.top()
  },
  toChild: function () {
    console.log('child');
    this.updateBtnStatus('child');
    this.setData({
      now: "child"
    })
    this.add(common.list, "child");
    wx.startPullDownRefresh()
    this.top()
  },
  toMom: function () {
    console.log('mom');
    this.updateBtnStatus('mom');
    this.setData({
      now: "mom"
    })
    this.add(common.list, "mom");
    wx.startPullDownRefresh()
    this.top()
  },
  toGirl: function () {
    console.log('girl');
    this.updateBtnStatus('girl');
    this.setData({
      now: "girl"
    })
  },
  toShoe: function () {
    console.log('shoe');
    this.updateBtnStatus('shoe');
    this.setData({
      now: "shoe"
    })
  },
  toHome: function () {
    console.log('home');
    this.updateBtnStatus('home');
    this.setData({
      now: "home"
    })
  },
  toBeauti: function () {
    console.log('beauti');
    this.updateBtnStatus('beauti');
    this.setData({
      now: "beauti"
    })
  },
  toFood: function () {
    console.log('food');
    this.updateBtnStatus('food');
    this.setData({
      now: "food"
    })
  },
  detail:function (e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  // videoErrorCallback: function (e) {
  //   console.log('视频错误信息:')
  //   console.log(e.detail.errMsg)
  // },
  onLaunch: function () {
    console.log('bb Launching ...');
  },
  //显示页面加载图标
  onShow: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        hidden: true
      });
    }, 1500);
  },
  //给顶部导航增加选中类名
  updateBtnStatus: function (k) {
    this.setData({
      new: this.getHoverd('new', k),
      good: this.getHoverd('good', k),
      child: this.getHoverd('child', k),
      mom: this.getHoverd('mom', k),
      girl: this.getHoverd('girl', k),
      shoe: this.getHoverd('shoe', k),
      home: this.getHoverd('home', k),
      beauti: this.getHoverd('beauti', k),
      food: this.getHoverd('food', k)
    });
  },
  //判断当前页面是否选中
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  }
});