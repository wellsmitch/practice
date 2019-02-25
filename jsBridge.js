// web端使用WebViewJavascriptBridge实现与ios和android原生交互
// 第一步:

    /*这段代码是固定的，必须要放到js中*/

    function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {return callback(WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) {return window.WVJBCallbacks.push(callback);}
        document.addEventListener(
            'WebViewJavascriptBridgeReady'
            , function() {
                WebViewJavascriptBridge.init(function(message, responseCallback) {
                    responseCallback(data);
                });
                callback(WebViewJavascriptBridge)
            },
            false
        );

        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    }

// 第二步:注册事件,此事件在ios和android必须一致

/*jsBride  调用原生注册的方法*/
setupWebViewJavascriptBridge(function(bridge){

    /*JS给ObjC提供公开的API，ObjC端通过注册，就可以在JS端调用此API时，得到回调。ObjC端可以在处理完成后，反馈给JS，这样写就是在载入页面完成时就先调用*/
    bridge.callHandler('事件名称', function(responseData) {

        /*回调函数,可不要*/

    })

});

// 第三步:事件调用,给元素绑定事件

$("#test").on('click',function(e){

    window.WebViewJavascriptBridge.callHandler('注册的事件名', 传递的参数, function(response) {
        /*回调函数,可不要*/
    })

});

// 第四步就剩下再ios和android端分别注册

/*js 注册原生需要调用的方法*/
// WebViewJavascriptBridge.registerHandler("change_address_service", function(data, responseCallback) {
//     document.getElementById("show").innerHTML = ("data from Java: = " + data);
//     var responseData = "Javascript Says Right back aka!";
//     responseCallback(responseData);
// });
