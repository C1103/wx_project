Page({
    data: {
        address: '未设置地址',
    },
    gotoStorage: function() {
        wx.navigateTo({
            url: '../storage/storage',
        });
    },
    // 页面加载完成
    onLoad: function(options) {

        console.log('onLoad');
    },
    onShow: function() {
        var that = this;
        wx.getStorage({
            key: 'address',
            success: function(res) {
                console.log(res)
                if (res.data.length > 0) {
                    that.setData({
                        address: res.data,
                    })
                } else {
                    that.setData({
                        address: ''
                    })
                }
            }
        })
        console.log('onShow');
    },
    onReady: function() {
        console.log('onReady');
    },
    onHide: function() {
        console.log('onHide');
        this.setData({
            hello: '欢迎再次来到本页面'
        })
    },
    onUnload: function() {
        console.log('onUnload');
    }
})