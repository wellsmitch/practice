define('dop',function (){

    // define(["./cart", "./inventory"], function(cart, inventory) {

    var add11 = function (x,y){
        return x+y;
    };


    //注意要有返回值
    return {
        add11: add11,
        dropMethod:function () {
            console.log('dop 模块执行了');
        }
    };

});
