var postsData = require('../../data/posts-data.js');
// var postsData = require('/data/posts-data.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        //小程序总是会读取data对象来做数据绑定，这个动作为动作A
        //A的执行，在onload事件执行之后发生
    },

    imagePath: "",//自定义变量

    /// 自定义方法
    process: function () { },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log("onload");
        //放置服务器请求
        // var posts_contents_data = { "posts_key": posts_content }
        this.setData(
            {
                "posts_key": postsData.postList
            });
    },
})