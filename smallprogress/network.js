// let _token;
// try {
//   _token = wx.getStorageSync('TOKEN')
// } catch (e) {
//   // Do something when catch error
// }
const Network = {
    post: (url, opts, sucCb, errorCb) => {
        if (opts.loading) {
            wx.showLoading({
                title: '加载中...',
                mask: true
            });
        }
        var optaions = {};
        if(!!opts.params.params){
            optaions = opts.params;
            optaions.params = JSON.parse(optaions.params);
            if(!!!optaions.params.source) {
                optaions.params.source = '3';
            }
            optaions.params = JSON.stringify(optaions.params);
        } else {
            if(!!!opts.params.source) {
                opts.params.source = '3';
            }
            optaions = opts.params;
        }
        let _param = {
            url: url,
            data: optaions,
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'token': ''
            },
            success: (res) => {
                /*
                * 背景：sessionKey过期时候需要重新登陆
                *  wx.checkSession({
                      success: () => {
                        // this.app.setData({redrectUrl: redrectUrl});
                        this.authBind(encryptedData, iv, success);
                      },
                      fail: () => {
                * */
                /*
                * 在此   前端可以根据后台返回的错误码来判断是否重新登录。
                *
                * if(res.checkcodeold) {
                    wx.login({
                        success: (res) => {
                          //  重置本地 login_code
                            this.app.globalData.login_code =  res.code;


                             Network.post(Api.AUTH_LOGIN, {
                                    params: {
                                        type: 'czt-xcx',
                                        code: res.code
                                    },
                                    tokenNone: true,
                                    loading: false
                                }, (res) => {
                                //res.sessionKey res.openid
                                }
                        }
                    })
                }

                *
                * */
                sucCb && sucCb(res.data)
            },
            fail: (res) => {
                if (errorCb) {
                    errorCb && errorCb(res.data);
                } else {
                    wx.showToast({
                        title: '服务器繁忙！请稍后重试',
                        icon: 'none'
                    });
                }
            },
            complete: () => {
                if (opts.loading) {
                    wx.hideLoading()
                }
            }
        }
        if (opts.tokenNone) { // 不需要token
            delete _param.header.token;
        } else {
            let _token = wx.getStorageSync('TOKEN');
            if (_token) {
                console.log('token:' + _token);
                _param.header['token'] = _token;
            }
        }
        wx.request(_param)
    },
    get: (url, opts, sucCb, errorCb) => {
        if (opts.loading) {
            wx.showLoading();
        }
        let _param = {
            url: url,
            // data: params,
            method: 'GET',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'token': ''
            },
            success: (res) => {
                sucCb && sucCb(res)
            },
            fail: (res) => {
                if (errorCb) {
                    errorCb && errorCb(res);
                } else {
                    wx.showToast({
                        title: '网络异常',
                        icon: 'none'
                    });
                }
            },
            complete: () => {
                if (opts.loading) {
                    wx.hideLoading();
                }
            }
        };
        if (opts.tokenNone) { // 不需要token
            delete _param.header.token;
        } else {
            // console.log('token:' + _token);
            let _token = wx.getStorageSync('TOKEN');
            if (_token) {
                _param.header['token'] = _token;
            }
        }
        console.log(_param)
        wx.request(_param)
    }
}
export default Network
