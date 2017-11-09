/// 获得数据
var postDatas = require('../../../data/posts-data.js');

Page({

    onLoad: function(option) {
        //获得url？后面拼接的参数
        var postId = option.id;
        this.setData({
            currentPostId: postId
        });

        //获得当前对象
        var postData = postDatas.postList[postId];
        this.setData({
            postData:postData
        });

        // var postCollected = {
        //     1: "true",
        //     2: "false",
        //     3: "true"
        // }

        var postsCollected = wx.getStorageSync('posts_Collected');

        if(postsCollected){//如果存在缓存状态

            //获得当前的状态
            var postCollected = postsCollected[postId];
            this.setData({
                collected: postCollected
            });

        } else {//不存在

            var postCollected = {};
            postCollected[postId] = false;
            wx.setStorageSync('posts_Collected', postCollected);
        }
    },

    // 收藏按钮
    onCollectionTap: function(event) {

        //获取缓存
        var postsCollected = wx.getStorageSync('posts_Collected');

        //获取当前状态
        var postCollected = postsCollected[this.data.currentPostId];

        //取反
        postCollected = !postCollected;

        //进行数据修改
        postsCollected[this.data.currentPostId] = postCollected;

        // this.showModel(postsCollected, postCollected);

        //进行存储更新
        wx.setStorageSync('posts_Collected', postsCollected);

        //更新数据绑定
        this.setData({
            collected: postCollected
        });

        wx.showToast({
            title: postCollected ? '收藏成功' : '取消成功',
        })
    },




    showModel: function(postsCollected,postCollected){
        var that = this;
        wx.showModal({
            title: '收藏',
            content: postCollected ? '收藏该文章?' : '取消收藏该文章?',
            showCancel: 'true',
            cancelColor: '#333',
            confirmText: '确认',
            success: function(res){
                if (res.confirm == true){
                    //执行收藏操作

                    //进行存储更新
                    wx.setStorageSync('posts_Collected', postsCollected);

                    //更新数据绑定
                    that.setData({
                        collected: postCollected
                    });
                }
            },
        })
    },

    // 分享按钮
    onShareTap: function(event) {

    },
})