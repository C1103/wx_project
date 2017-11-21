//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        currentTab: 0,
        // activeIndex: 0
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    swiperTab: function(e) {
        this.setData({
            currentTab: e.detail.current,
            // activeIndex: e.detail.current
        });
    },
    clickTab: function(e) {
        // active 加到当前的也好 X
        // 状态改变 data binding 值
        var index = e.target.dataset.current;
        console.log(index);
        this.setData({
            // activeIndex: index,
            currentTab: index
        });
        // console.log('clicktab');
    },
    onLoad: function() {
        // 界面状态的改变，由数据决定
        // 界面的状态 === 数据的值
        // MVVM 区分于dom api的本质
        // setTimeout(() => {
        //     this.setData({
        //         currentTab: 1
        //     });
        // }, 1500);
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})