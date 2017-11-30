Page({
    data: {
        second: 3,
        font: "跳过"
    },
    onLoad: function() {
        countdown(this);
    }
});

function countdown(that) {
    var second = that.data.second
    if (second == 0) {
        that.setData({
            second: "",
            font: ""
        });
        return;
    }
    var time = setTimeout(function() {
        that.setData({
            second: second - 1
        });
        countdown(that);
    }, 1000)
}