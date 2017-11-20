// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        arrList: [
            // '列表一',
            // '列表二',
            // '列表三',
            // '列表四',
            // '列表五',
            // '列表六',
            // '列表七',
            // '列表八',
            // '列表九',
            // '列表十',
            // '列表十一',
            // '列表十二',
            // '列表十三',
            // '列表十四',
            // '列表十五',
            // '列表十六',
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log("列表展示");
        // 箭头函数
        // this 指向，向父级一样
        setTimeout(() => {
            this.setData({
                arrList: [
                    '列表一',
                    '列表二',
                    '列表三',
                    '列表四',
                    '列表五',
                    '列表六',
                    '列表七',
                    '列表八',
                    '列表九',
                    '列表十',
                    '列表十一',
                    '列表十二',
                    '列表十三',
                    '列表十四',
                    '列表十五',
                    '列表十六',
                ]
            });
        }, 1500);

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    createData() {
        // 最多30条数据
        // 函数返回值
        let length = this.data.arrList.length;
        if (length <= 30) {
            return ['项目', '项目', '项目'];
        } else {
            return [];
        }
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

        let arr = this.data.arrList;
        arr.push(...this.createData());
        // console.log(arr);

        this.setData({ arrList: arr });
        // this.setData
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})