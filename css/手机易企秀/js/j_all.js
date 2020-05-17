//弹出居中框
function show_pop_box(idname) {
    var newbox = document.getElementById(idname);
    newbox.style.zIndex = "9999";
    newbox.style.display = "block"
    newbox.style.position = "fixed";
    newbox.style.top = newbox.style.left = "50%";
    newbox.style.marginTop = -newbox.offsetHeight / 2 + "px";
    newbox.style.marginLeft = -newbox.offsetWidth / 2 + "px";
    var layer = document.createElement("div");
    layer.id = "layer";
    layer.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
    layer.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px";
    layer.style.position = "absolute";
    layer.style.top = layer.style.left = 0;
    layer.style.backgroundColor = "#000";
    layer.style.zIndex = "9998";
    layer.style.opacity = "0.5";
    document.body.appendChild(layer);
    isScroll = false;
}

//关闭分享提示
function close_div(idname) {
    var newbox = document.getElementById(idname);
    newbox.style.display = "none";
    document.body.style.overflow = "auto";
    var body = document.getElementsByTagName("body");
    var layer = document.getElementById("layer");
    body[0].removeChild(layer);
    isScroll = true;
}
//页面主要js
var veiwHeight = document.documentElement.clientHeight;
$('article, section').css('height', veiwHeight);
var scrollFn = function(){
    $('.scroll').css({display: "block"});
    var pageNum = 0;
    var sectionLength = $('section').size();

    $('section, .page_up').on('swipeup', function(){
        pageNum++;
        if(pageNum > sectionLength-1){
            pageNum = sectionLength-1;
        }
        if( pageNum == sectionLength-1){
            $('.page_up').hide();
        }
        pageUp(pageNum);
    })

    $('section, .page_up').on('swipedown', function(){
        $('.page_up').show();
        $('.open').css('display','none');
        pageNum--;
        if(pageNum < 0){
            pageNum = 0;
        }
        pageUp(pageNum);
    })

    function pageUp(oIndex){
        $('.scroll').css('top', -pageNum*veiwHeight);
        $('section').removeClass('active_page');
        $('section').eq(oIndex).addClass('active_page');
    }

    $('.page1_btn').click(function(e) {

        $('.scroll').css('top', -1*veiwHeight);
        $('#s1').removeClass('active_page');
        $('#s2').addClass('active_page');
        pageNum++;
    });
    $('.page3_btn').click(function(e) {

        $('.scroll').css('top', -3*veiwHeight);
        $('#s3').removeClass('active_page');
        $('#s4').addClass('active_page');
        pageNum++;
    });
    $('.page4_btn').click(function(e) {

        $('.scroll').css('top', -4*veiwHeight);
        $('#s4').removeClass('active_page');
        $('#s5').addClass('active_page');
        pageNum++;
    });
    $('.page5_btn').click(function(e) {

        $('.scroll').css('top', -5*veiwHeight);
        $('#s5').removeClass('active_page');
        $('#s6').addClass('active_page');
        pageNum++;
    });
    $('.page6_btn').click(function(e) {

        $('.scroll').css('top', -6*veiwHeight);
        $('#s6').removeClass('active_page');
        $('#s7').addClass('active_page');
        pageNum++;
    });
    $('.page7_btn').click(function(e) {

        $('.scroll').css('top', -7*veiwHeight);
        $('#s7').removeClass('active_page');
        $('#s8').addClass('active_page');
        pageNum++;
    });
    $('.page8_btn').click(function(e) {

        $('.scroll').css('top', -8*veiwHeight);
        $('#s8').removeClass('active_page');
        $('#s9').addClass('active_page');
        pageNum++;
    });
    $('.page9_btn').click(function(e) {

        $('.scroll').css('top', -9*veiwHeight);
        $('#s9').removeClass('active_page');
        $('#s10').addClass('active_page');
        pageNum++;

    });


}
//推荐分享按钮
$('#share_btn, #share_btn2').on('tap',function(){
    isScroll = false;
    $('.share_box').addClass('open');
    $('.black_cover').addClass('open');
    setTimeout(function(){
        $('.share_box').removeClass('open');
        $('.black_cover').removeClass('open');
        isScroll = true;
    },2000);
})
//兼容addEventListeners
function addEventListeners(ele,type,callback){

    if(ele.addEventListener){
        ele.addEventListener(type,callback,false);
    }else if(ele.attachEvent){
        ele.attachEvent('on' + type,callback);
    }else{
        ele['on' + type] = callback;
    }
}
window.addEventListener('load', function(){
    $(".load").css({display: "none"});
    $('body').addClass('')
    scrollFn();
}, false);

//同一属性的两种动画效果
var animationDiv = $("");
animationDiv.bind("webkitAnimationEnd", function() {
    animationDiv.removeClass("");
    animationDiv.addClass("");

});


