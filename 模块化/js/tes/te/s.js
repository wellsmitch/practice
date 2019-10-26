define('fg',['te/k'],function (dop){

    // define(["./cart", "./inventory"], function(cart, inventory) {

    var add = function (x,y){
        return x+y;
    };
    // dop.dropMethod();

    //注意要有返回值
    return {
        add: add
    };

});
