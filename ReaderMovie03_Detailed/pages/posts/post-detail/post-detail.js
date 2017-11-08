/// 获得数据
var postDatas = require('../../../data/posts-data.js');

Page({
    onLoad: function(option) {
        //获得url？后面拼接的参数
        var postId = option.id;
        //获得当前对象
        var postData = postDatas.postList[postId];

        this.setData({
            "postData":postData
        });
    }
})